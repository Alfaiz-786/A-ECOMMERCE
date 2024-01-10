"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("https://a-ecommerce.vercel.app/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/signin");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <>
      <div className="grid place-items-center h-screen w-96 mx-auto">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400">
          <h1 className="text-xl font-bold my-4 text-black">Register</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              className="flex bg-blue-500 text-black"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
            <input
              className="flex bg-blue-500 text-black"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              className="flex bg-blue-500 text-black"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className="bg-blue-600 text-black font-bold cursor-pointer px-6 py-2 hover:bg-blue-700  transition duration-300">
              Register
            </button>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link
              className="text-sm mt-3 text-right text-black"
              href={"/signin"}
            >
              Already have an account?{" "}
              <span className="underline text-blue">Login</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
