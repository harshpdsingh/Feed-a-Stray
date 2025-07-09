"use client";
import { React, useState, useEffect } from "react";
import Script from "next/script";
import { initiate } from "@/actions/useractions";
import { useSession } from "next-auth/react";
import { fetchpayments } from "@/actions/useractions";
import { FaRegUserCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Payment({ username, admin }) {
  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const { data: session, status } = useSession();
  const donorUsername = session?.user?.name || "Guest";
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.name) {
      const donorUsername = session.user.name;
      getData(donorUsername);
    }
  }, [status, session]);

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {
      toast("Thanks for your donation!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    router.push(`/${username}`);
  }, []);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };
  // console.log(donorUsername);
  const getData = async (donorUsername) => {
    // console.log("Fetching user data for:", donorUsername);
    let dbpayments = await fetchpayments(username);
    setPayments(dbpayments);
    // console.log("Payments:", dbpayments);
  };

  const pay = async (amount) => {
    // Get the order Id
    let a = await initiate(amount, username, paymentform, donorUsername);
    let orderId = a.id;
    var options = {
      key: admin.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Feed a Stray", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "SAMPLE_NAME", //your customer's name
        email: "sample@example.com",
        contact: "0000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <ToastContainer position="top-right" />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div>
        <div className="cover w-full bg-red-50 relative">
          <img
            className="object-cover w-full h-48 md:h-[350px] shadow-blue-700 shadow-sm"
            src="/cover.jpg"
            alt=""
          />
          <div className="absolute -bottom-20 right-[33%] md:right-[46%] border-grey overflow-hidden border-2 rounded-full size-36">
            <img
              className="rounded-full object-cover size-36"
              width={115}
              height={115}
              src="/profile.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 mb-32 flex-col gap-2npm rn">
        <div className="font-bold text-lg text-white">@{username}</div>
        <div className="text-slate-400">Lets help {username} feed a stray!</div>
        <div className="text-slate-400">
          {payments.length} Donations . ₹
            {payments.reduce((a, b) => a + b.amount, 0)} raised
        </div>
        <div className="payment flex gap-3 w-[80%] mt-11 flex-col md:flex-row">
          <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white px-2 md:p-10">
            {/* Show list of all the supporters as a leaderboard  */}
            <h2 className="text-2xl font-bold my-5"> Top 10 Supporters</h2>
            <ul className="mx-3 text-lg max-h-72 overflow-y-auto pr-2">
              {payments.length == 0 && <li>No payments yet</li>}
              {payments.map((p, i) => {
                return (
                  <li key={i} className="my-4 flex gap-4 items-center">
                    <FaRegUserCircle size={28} className="flex-shrink-0 mt-1" />
                    <span>
                      {p.name} donated{" "}
                      <span className="font-bold">₹{p.amount}</span> with a
                      message &quot;{p.message}&quot;
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white px-2 md:p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              {/* input for name and message   */}
              <div>
                <input
                  onChange={handleChange}
                  value={paymentform.name}
                  name="name"
                  type="text"
                  className="w-full p-3 rounded-lg bg-slate-800"
                  placeholder="Enter Name"
                />
              </div>
              <input
                onChange={handleChange}
                value={paymentform.message}
                name="message"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />

              <input
                onChange={handleChange}
                value={paymentform.amount}
                name="amount"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <div className="text-center">
                <button
                  onClick={() => {
                    if (paymentform.name.length < 3) {
                      toast.error("Name must be at least 3 characters");
                      return;
                    }
                    if (paymentform.message.length < 4) {
                      toast.error("Message must be at least 4 characters");
                      return;
                    }
                    if (!paymentform.amount || isNaN(paymentform.amount)) {
                      toast.error("Please enter a valid amount");
                      return;
                    }
                    pay(Number.parseInt(paymentform.amount) * 100);
                  }}
                  type="button"
                  className="w-[50%] cursor-pointer text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Pay
                </button>
              </div>
            </div>
            {/* Or choose from these amounts  */}
            <div className="flex flex-col md:flex-row gap-2 mt-5">
              {[1000, 2000, 3000].map((amt, idx) => (
                <button
                  key={idx}
                  className="bg-slate-800 p-3 rounded-lg cursor-pointer"
                  onClick={() => {
                    if (paymentform.name.length < 3) {
                      toast.error("Name must be at least 3 characters");
                      return;
                    }
                    if (paymentform.message.length < 4) {
                      toast.error("Message must be at least 4 characters");
                      return;
                    }
                    pay(amt); // Already in paise (e.g. ₹10 = 1000)
                  }}
                >
                  Pay ₹{amt / 100}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
