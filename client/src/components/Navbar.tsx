import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center py-4 text-white">
      <div className="text-4xl">ToDo App</div>

      {session && (
        <div className="flex flex-col items-center gap-2">
          <button 
            className="px-4 py-1 text-white rounded-md bg-gray-700 hover:bg-gray-800 transition"
            onClick={() => signOut()}
          >
            Logout
          </button>
          <Image
            className="rounded-full"
            // fallback value provided if image is undefined
            src={session.user?.image ?? "/default-user.png"}
            alt="User Image"
            width={40}
            height={40}
          />
          <p className="text-xs font-semibold">{session.user?.name}</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
