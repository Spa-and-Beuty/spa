"use client";
import Image from "next/image";
import { bitter } from "../../../../../constants";
import { useState } from "react";
import { login } from "@/data/login";
import { useRouter } from "next/navigation";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { EyeClosedIcon } from "lucide-react";
import { GoEyeClosed } from "react-icons/go";
import { PiEyeClosedBold } from "react-icons/pi";
import { RiEyeCloseFill } from "react-icons/ri";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  function handleSetShowPassword(state) {
    setShowPassword(!state);
  }

  async function onSubmit(e) {
    console.log(email, password);
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = await login({ email, password });
      console.log(user);
      console.log(email, password);
      if (user.error) {
        setError(error);
      }
      if (!user.error) {
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section className="container  h-screen flex items-center justify-center  m-auto">
      <div className={" items-center justify-center"}>
        {/*<Image*/}
        {/*  src={"/assets/images/new_logo.jpg"}*/}
        {/*  alt={"logo"}*/}
        {/*  width={200}*/}
        {/*  height={200}*/}
        {/*/>*/}

        <div className={"text-center space-y-4"}>
          <h1 className={`text-6xl ${bitter.className} text-6xl font-bold `}>
            Welcome
          </h1>
          <span>Please login to admin dashboard</span>
          <form onSubmit={onSubmit} className={"space-y-4  w-[500px]"}>
            <div>
              {" "}
              <input
                onClick={(e) => setEmail(e.target.value)}
                className={"w-full p-4 border border-gray-200"}
                type={"email"}
                required
                placeholder={"EMAIL"}
              />
            </div>
            <div className={"relative"}>
              {" "}
              <input
                hidden={false}
                onClick={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required
                className={"w-full p-4 border border-gray-200 "}
                placeholder={"PASSWORD"}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className={"absolute right-4 top-1/2 -translate-y-1/2"}
              >
                {!showPassword ? (
                  <GoEyeClosed size={30} />
                ) : (
                  <EyeOpenIcon scale={3} className={"text-[30px]"} />
                )}
              </div>
            </div>
            <p className={"text-sm text-red-500"}>{error}</p>
            <button
              disabled={isLoading}
              type={"submit"}
              className={`px-6 w-full py-3 ${isLoading ? "bg-gray-600" : "bg-link-color-hover"} text-white rounded`}
            >
              {isLoading ? "Logging In..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
