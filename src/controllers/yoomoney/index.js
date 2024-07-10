import yooMoneySchema from "../../models/yooMoneySchema.js"
import paymentSchedulerSchema from "../../models/paymentScheduler.js"
import { payLoadWithToken, processTodayPayments } from '../../middleware/yooMoneyMiddleware.js';
import UserModel from "../../models/userSchema.js";

/**
 *  The yoo money controller
 * @namespace yooMoneyController
 */

export const yooMoneyController = {

	payLoadWithTokenHandler: async (req, res, next) => {
		try {
			let planName = '';
			let planAmount = 0
			const currentDate = new Date();
			const nextDate = new Date(currentDate);
			console.log(req.body);
			const _id = req.body.userId;
			nextDate.setMonth(currentDate.getMonth());
			if (req.body.plan == 'trial') {
				planName = 'trial';
				planAmount = process.env.YooMoney_PAYMENT_PLAN_TRIAL_VALUE;
				// Add a month
				nextDate.setMonth(currentDate.getMonth() + 1);
			} else if (req.body.plan == 'month') {
				planName = 'month';
				planAmount = process.env.YooMoney_PAYMENT_PLAN_MONTHLY_VALUE;
				// Add a month
				nextDate.setMonth(currentDate.getMonth() + 1);
			} else if (req.body.plan == 'year') {
				planName = 'year';
				planAmount = process.env.YooMoney_PAYMENT_PLAN_YEARLY_VALUE;
				// Add a year
				nextDate.setFullYear(currentDate.getFullYear() + 1);
			} else
				return res.status(422).send({ message: "Please select plan to proceed" });

			const yooPaymentRes = await payLoadWithToken(planAmount, req.body.token);

			if (yooPaymentRes) {

				const newPayment = new yooMoneySchema({ user: req.body.userId, payment_id: yooPaymentRes.id, amount: planAmount });
				await newPayment.save();


				const paymentScheduler = new paymentSchedulerSchema({
					user: req.body.userId,
					payment_id: yooPaymentRes.id,
					amount: planAmount,
					status: yooPaymentRes.status,
					schedule_at: nextDate,
					created_at: currentDate
				});
				await paymentScheduler.save();

				await UserModel.findByIdAndUpdate(
					{ _id },
					{
						subscriptionDate: currentDate,
						paymentActive: true,
						subscriptionStatus: 'active',
						paymentSchedule: planName,
					},
					{ new: true }
				);
				return res.json(paymentScheduler);
			} else
				return res.json({ message: "Error occurred while processing your payment" });
		} catch (error) {
			console.log(error)
			return res.json(error);
		}
	},

	cancelSubscription: async (req, res, next) => {
		console.log("Canceling Subscription");
		try {
			const { _id } = req.body;

			await UserModel.findByIdAndUpdate(
				{ _id },
				{
					paymentSchedule: "trial",
					paymentActive: false,
					subscriptionStatus: null,

				},
				{ new: true }
			);

			res.status(200).json({ message: "Subscription cancelled successfully" });
		} catch (err) {
			console.error(err);
			res.status(500).json({ message: "Internal server error" });
		}
	},

	processPaymentsForToday: async (req, res, next) => {
		console.log("create subscription payment");
		try {

			const todayStart = new Date();
			todayStart.setUTCHours(0, 0, 0, 0);
			console.log('Start of today:', todayStart);

			const todayEnd = new Date();
			todayEnd.setUTCHours(23, 59, 59, 999);
			console.log('End of today:', todayEnd);

			const paymentsForToday = await paymentSchedulerSchema.find({
				schedule_at: {
					$gte: todayStart,
					$lt: todayEnd
				}
			});

			console.log(paymentsForToday);

			for (const payment of paymentsForToday) {

				const payLoad =
				{
					"amount": {
						"value": payment.amount,
						"currency": "RUB"
					},
					"capture": true,
					"payment_method_id": payment.payment_id,
					"description": "Order No. 37"
				}
				const processedPayment = await processTodayPayments(payLoad); // Process each payment
				const { _id } = payment.user;
				const paymentId = payment._id;
				const user = UserModel.findById({ _id });

				if (!processedPayment) {
					await UserModel.findByIdAndUpdate(
						{ _id },
						{
							paymentSchedule: "trial",
							paymentActive: true,
							subscriptionStatus: null,

						},
						{ new: true }
					);
					await paymentSchedulerSchema.deleteOne({ paymentId })
				} else {

					const data = getDateforSchedulePayments(user.paymentSchedule)
					const paymentId = payment.id
					const newPayment = new yooMoneySchema({ user: user._id, payment_id: processedPayment.id, amount: planAmount });
					await newPayment.save();
					await paymentSchedulerSchema.findByIdAndUpdate(
						{ paymentId },
						{
							payment_id: processedPayment.id,
							amount: data.planAmount,
							status: processedPayment.status,
							schedule_at: data.nextDate,
							updated_at: data.currentDate

						},
						{ new: true }
					);
					await UserModel.findByIdAndUpdate(
						{ _id },
						{
							nextPaymentSchedule: data.nextDate
						},
						{ new: true }
					);


				}

			}
			//res.status(200).json({ message: "Subscription cancelled successfully" });
		} catch (err) {
			console.error(err);
			//res.status(500).json({ message: "Internal server error" });
		}
	},

	getDateforSchedulePayments: async (paymentPlan) => {
		let planName = '';
		let planAmount = 0
		const currentDate = new Date();
		const nextDate = new Date(currentDate);
		if (paymentPlan == 'trial') {
			planName = 'trial';
			planAmount = process.env.YooMoney_PAYMENT_PLAN_TRIAL_VALUE;
			// Add a month
			nextDate.setMonth(currentDate.getMonth() + 1);
			return { planName, planAmount, nextDate }
		} else if (paymentPlan == 'month') {
			planName = 'month';
			planAmount = process.env.YooMoney_PAYMENT_PLAN_MONTHLY_VALUE;
			// Add a month
			nextDate.setMonth(currentDate.getMonth() + 1);
			return { planName, planAmount, nextDate }
		} else if (paymentPlan == 'year') {
			planName = 'year';
			planAmount = process.env.YooMoney_PAYMENT_PLAN_YEARLY_VALUE;
			// Add a year
			nextDate.setFullYear(currentDate.getFullYear() + 1);
			return { planName: planName, planAmount: planAmount, nextDate: nextDate, currentDate: currentDate }
		}
	},
}