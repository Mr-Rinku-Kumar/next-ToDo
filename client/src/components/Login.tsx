"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const Login = () => {
  const { data: session, status } = useSession();

  //Loading...
  if (status === "loading") {
    return <div className="min-h-screen grid place-items-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen grid place-items-center">
      {session ? (
        <div className="flex flex-col items-center gap-4">
          <Image
            src={session.user?.image || "/default-avatar.png"} // Default image fallback
            alt="User Image"
            width={50}
            height={50}
            className="rounded-full border"
          />
          <p className="text-xl font-semibold">{session.user?.name}</p>
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-md"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          className="bg-white px-8 py-4 flex gap-2 items-center rounded-md"
          onClick={() => signIn("google")}
        >
          <FcGoogle size={30} />
          Sign In with Google
        </button>
      )}
    </div>
  );
};

export default Login;
