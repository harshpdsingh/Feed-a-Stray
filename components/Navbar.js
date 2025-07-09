"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

function Navbar() {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false);
  const pathname = usePathname();

  
  return (
    <>
      <nav className="bg-slate-950 shadow-xl shadow-white text-white flex justify-between items-center px-4 md:h-16">
        <Link href={"/"} className="flex justify-between items-center gap-4">
          <img className="" src="stray.webp" width={44} alt="" />
          <span className="text-xl md:text-base my-3 md:my-0">
            Feed a Stray
          </span>
        </Link>

        <div className="relative flex justify-center items-center  md:block gap-4 ">
          {session && (
            <>
              <button
                onClick={() => setShowdropdown(!showdropdown)}
                onBlur={() => {
                  setTimeout(() => {
                    setShowdropdown(false);
                  }, 100);
                }}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="cursor-pointer text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Account
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${
                  showdropdown ? "" : "hidden"
                } absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li className="cursor-pointer">
                    <Link
                      href={
                        session.user.isAdmin
                          ? "/dashboard"
                          : `/${encodeURIComponent(session.user.name)}`
                      }
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  {/* <li className="cursor-pointer">
                  <Link
                    href={`/${session.user.name}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Page
                  </Link>
                </li> */}
                  <li className="cursor-pointer">
                    <Link
                      href={"/about"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}

          {session && (
            <button
              className="cursor-pointer text-white w-fit bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
            >
              Logout
            </button>
          )}
          {!session && pathname !== "/login" && (
            <Link href="/login">
              <button className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
