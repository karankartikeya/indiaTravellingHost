import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

type Props = {
  menu: Boolean;
  session: Boolean;
};

export default function Menu({ menu, session }: Props) {

  const supabaseClient = useSupabaseClient();
  const signOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) {
      location.reload();
    }
  }

  const menus = [
    {
      title: "Home",
      link:"/"
    },
    {
      title: "Why Us?",
      link: "/#whyUs"
    },
    {
      title: "How it Works?",
      link: "/#howItWorks"
    },
    {
      title: "Courses",
      link: "/#courses",
    },
  ];

  const router = useRouter();
  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute top-full mt-8 w-full shadow lg:hidden bg-yellow-300 z-30"
        >
          <ul className="flex flex-col divide-y divide-gray-100 text-center ">
            {menus &&
              menus.map((item, i) => (
                <li
                  className={` text-black font-semibold py-4 transition hover:text-blue-500 `}
                  key={i}
                  onClick={() => router.push(item?.link as string)}
                >
                  {item?.title}
                </li>
              ))}
            {session ? (
              <>
                <li
                  className="active:text-blue-600 font-semibold text-gray-600 font-bold py-4 transition hover:text-blue-500 "
                  onClick={() => router.push("/profile/dashboard")}
                >
                  My Learning
                </li>
                <li
                  className="active:text-blue-600 font-semibold text-xl text-gray-600 font-bold py-4 transition hover:text-blue-500 "
                  onClick={signOut}
                >
                  SignOut
                </li>
              </>
            ) : (
              <>
                <li
                  className="active:text-blue-600 font-extrabold text-gray-600 font-bold py-4 transition hover:text-blue-500 "
                  onClick={() => router.push("/signin")}
                >
                  Login
                </li>
                <li
                  className="active:text-blue-600 font-extrabold text-gray-600 font-bold py-4 transition hover:text-blue-500 "
                  onClick={() => router.push("/register")}
                >
                  SignUp
                </li>
              </>
            )}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
