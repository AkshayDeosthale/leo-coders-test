import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const check = (e) => {
    e.preventDefault();
    if (email === "username-test@yopmail.com" && password === "123456") {
      router.push("/articleList");
    } else {
      return toast(
        "Incorrect credentials , enter | Username: username-test@yopmail.com  ,  Password:123456 "
      );
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="w-1/2 h-1/2 border p-2 rounded-lg flex flex-col justify-center items-center">
        <form className="w-full flex flex-col justify-center items-center space-y-5">
          <input
            type="text"
            placeholder="Email"
            className="w-1/2 p-2 border outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-1/2 p-2 border outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="border font-bold rounded-full py-2 px-5 border-black active:scale-95 active:border-lime-500"
            onClick={check}
          >
            Log In
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
