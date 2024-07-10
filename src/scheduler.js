import cron from 'node-cron';
import paymentSchedulerSchema from "../src/models/paymentScheduler.js"
import { yooMoneyController } from "../src/controllers/yoomoney/index.js"

export function startScheduler() {
  // Scheduler configuration to run every day at 00:01 (12:01 AM)
  // cron.schedule('1 0 * * *', async () => {
  //   console.log('Running scheduler...');

  //   try {
  //     const todayStart = new Date();
  //     todayStart.setHours(0, 0, 0, 0);
  //     console.log('Start of today:', todayStart);

  //     const todayEnd = new Date();
  //     todayEnd.setHours(23, 59, 59, 999);
  //     console.log('End of today:', todayEnd);

  //     

  //     console.log(`${paymentsForToday.length} payments scheduled for today.`);

  //   } catch (error) {
  //     console.error('Error running scheduler:', error);
  //   }
  // });
//'0 8,13,18 * * *'
  cron.schedule('* * * * *', async () => {
    console.log('Scheduler running...');
    await yooMoneyController.processPaymentsForToday();
  });

  console.log('Scheduler has been initialized.');
}