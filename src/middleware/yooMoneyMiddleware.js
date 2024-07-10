import { YooCheckout } from '@a2seven/yoo-checkout'; // OR const { YooCheckout } = require('@a2seven/yoo-checkout');
import { v4 as uuidv4 } from 'uuid';

const checkout = new YooCheckout({ shopId: process.env.YOOMoney_SHOP_ID, secretKey: process.env.YOOMoney_SECRET_KEY });

export const payLoad = async (req, res, next) => {
    const amount = req.body.amount;
    const user = req.body
    const userId = req.body.userId;
    try {
        const idempotenceKey = uuidv4();
        const createPayload = {
            amount: {
                value: amount,
                currency: 'RUB'
            },
            payment_method_data: {
                type: 'bank_card'
            },
            confirmation: {
                type: 'redirect',
                return_url: 'fitespace//payment-success '
            },
            'capture': true,
            'description': 'Order No. ' + idempotenceKey,
            'save_payment_method': true
        };
        const payment = await checkout.createPayment(createPayload, idempotenceKey);
        //const newPayment = new yooMoneySchema({ user: userId, payment_id: payment.id, amount: parseFloat(req.body.amount) });
        //const savedPayment = await newPayment.save();
        //const newPaymentSaved = await yooMoneySchema.findById( newPayment._id )
        res.json(payment);
    } catch (error) {
        console.warn("ERROR: ", error);
        res.json({ error: error });
    }
};

export const capturePayload = async (req, res, next) => { 

    try {
        const paymentId = req.body.paymentId
        const idempotenceKey = uuidv4();
        const capturePayload = {
            amount: {
                value: '2.00',
                currency: 'RUB'
            },

        };

        const payment = await checkout.capturePayment(paymentId, capturePayload, idempotenceKey);
        console.log(payment)


        // Return the currencies as a JSON response
        res.json(payment);
    } catch (error) {
        console.warn("ERROR: ", error);
        res.json({ error: error });
    }
};

export const getPayment = async (req, res, next) => {

    try {
        const paymentId = req.body.paymentId

        const payment = await checkout.getPayment(paymentId);
        console.log(payment)


        // Return the currencies as a JSON response
        res.json(payment);
    } catch (error) {
        console.warn("ERROR: ", error);
        res.json({ error: error });
    }
};

export const payLoadWithToken = async (amount, payment_token) => {
    
    try {
        const idempotenceKey = uuidv4();
        const createPayload = {
            "payment_token": payment_token,
            amount: {
                value: amount,
                currency: 'RUB'
            },
            confirmation: {
                type: 'redirect',
                return_url: 'test'
            },
            'capture': true,
            'description': 'Order No. ' + idempotenceKey,
            'save_payment_method': true
        };
        const payment = await checkout.createPayment(createPayload, idempotenceKey);
        return payment;

    } catch (error) {
        console.warn("ERROR: ", error);
        return error;
    }

    
};

export const processTodayPayments = async (payload) => {

    try {
        const payment = await checkout.createPayment(payload);
        console.log(payment)
        //return payment;
        //res.json(payment);
    } catch (error) {
        console.warn("ERROR: ", error);
        //res.json({ error: error });
    }
};

