import express from "express";
import { yooMoneyController } from "../../controllers/yoomoney/index.js"
import verifyTokenMiddle from "../../middleware/verifyTokenMiddle.js";

const yooMoneyRoute = express.Router();

//yooMoneyRoute.post("/create-payload",  yooMoneyPaymentController.payLoad);
yooMoneyRoute.post("/create-payload-with-token",  yooMoneyController.payLoadWithTokenHandler);
//yooMoneyRoute.post("/capture-payload", yooMoneyPaymentController.capturePayload);
//yooMoneyRoute.post("/get-payment", yooMoneyPaymentController.getPayment);
yooMoneyRoute.post("/cancel-subscription", yooMoneyController.cancelSubscription);

export { yooMoneyRoute };