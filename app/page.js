"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base  ">
        <div className="font-bold flex gap-3 md:text-5xl justify-center items-center text-3xl">
          <span>Feed a Paw</span>
          <span>
            <img className="rounded-full" src="/feed.gif" width={55} alt="" />
          </span>
        </div>
        <p className="text-center md:text-left">Create. Fund. Feed a Stray.</p>
        <p className="text-center md:text-left">
          Feed a Stray is a community-driven initiative aimed at providing food
          and care to stray animals in our neighborhoods.
        </p>
        <div>
          <Link href="/login">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
          >
            Start Here
          </button></Link>

          <Link href="/about">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
          >
            Read More
          </button></Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">
          Animal Lovers Like You Can Feed a Stray
        </h2>
        <div className="flex gap-5 justify-around max-md:items-baseline">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/feed1.gif"
              alt=""
            />
            <p className="font-bold text-center">People want to help strays</p>
            <p className="text-center">
              Supporters Are Ready to Sponsor a Meal
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold text-center">People want to contribute</p>
            <p className="text-center">
              People are willing to give financially.
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/volunteer.gif"
              alt=""
            />
            <p className="font-bold text-center">
              Volunteer, share, or start feeding today
            </p>
            <p className="text-center">
              Animal lovers are ready to join hands with you.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-14 pt-14 flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Learn More About Us
        </h2>

        <p className="text-lg text-center max-w-2xl leading-relaxed mb-10">
          At <span className="text-yellow-300 font-semibold">Feed A Stray</span>
          , our mission is to ensure no stray goes hungry. We connect
          compassionate people with stray animals in their communities —
          providing a platform to feed, care, and protect the voiceless.
          <br />
          <br />
          Every act of kindness matters. Whether it's food, water, or a warm
          smile — it changes lives. 🐾
        </p>

        {/* Contact Us - Inline in the same section */}
        <div className="w-full max-w-xl bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center text-yellow-300">
            Contact Us
          </h3>
          <p className="text-center text-lg mb-6">
            Want to partner, donate, volunteer, or just say hi? We'd love to
            hear from you!
          </p>

          <div className="flex flex-col items-center gap-3 text-base">
            <div className="flex items-center gap-2">
              <span className="font-semibold">📧 Email:</span>
              <a
                href="mailto:hello@feedastray.org"
                className="hover:underline text-yellow-300"
              >
                harshpdsingh@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}