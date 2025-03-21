"use client";

import { logoutUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()

  const handleLogout = async () => {
    const res = await logoutUser()
    console.log(res)
    router.push("/auth/login")
  }

  return (
    <div className="p-4">
      Home
      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-1 rounded-md">
        Logout
      </button>
    </div>
  );
}
