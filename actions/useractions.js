"use server";

import Razorpay from "razorpay";
import Pay from "@/models/Pay";
import connectDb from "@/db/connectDb";
import Admin from "@/models/Admin";

export const initiate = async (
  amount,
  to_username,
  paymentform,
  donorUsername
) => {
  await connectDb();
  // fetch the secret of the user who is getting the payment
  let user = await Admin.findOne();
  const secret = user.razorpaysecret;

  var instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: user.razorpaysecret,
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  let x = await instance.orders.create(options);

  // create a payment object which shows a pending payment in the database
  await Pay.create({
    from_user: donorUsername,
    oid: x.id,
    amount: amount / 100,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

export const fetchpayments = async (username) => {
  // console.log("Fetching payments for user:", username);
  await connectDb();
  // find all payments sorted by decreasing order of amount and flatten object ids
  let payments = await Pay.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .limit(10)
    .lean();
  const cleaned = payments.map((p) => ({
    from_user: p.from_user,
    name: p.name,
    to_user: p.to_user,
    oid: p.oid,
    message: p.message,
    amount: p.amount,
    done: p.done,
    createdAt: p.createdAt?.toISOString(),
    updatedAt: p.updatedAt?.toISOString(),
  }));
  return cleaned;
};
