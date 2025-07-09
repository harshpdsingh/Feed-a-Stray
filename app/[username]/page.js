import React from "react";
import Payment from "@/components/Payment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDb from "@/db/connectDb";
import Admin from "@/models/Admin";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  await connectDb();
  let admin = await Admin.findOne();
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const resolvedParams = await params;
  // console.log("username is ", resolvedParams)
  if (resolvedParams.username !== admin.username) {
    notFound();
  }
  return (
    <>
      <Payment
        username={resolvedParams.username}
        admin={JSON.parse(JSON.stringify(admin))}
      />
    </>
  );
};

export default page;

export async function generateMetadata({ params }) {
  const user = await params;
  return {
    title: `Feed a Stray: ${user.username}`,
    description: `Support stray animals with ${user.username}.`,
  };
}
