import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import { Inter } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";


export const metadata = {
  title: "Feed a Stray",
  description: "Feed a Stray - Donate to Help Stray Animals",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-x-hidden">
        <SessionWrapper>
          <ClientWrapper>{children}</ClientWrapper>
        </SessionWrapper>
      </body>
    </html>
  );
}
