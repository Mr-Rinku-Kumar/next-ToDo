"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import axios from "axios";
import { baseURL } from "@/utils/constant";
import ToDo from "@/components/ToDo";

export default function Home() {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [toDos, setToDos] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  

  useEffect(() => {
    axios
      .post(`${baseURL}/get`, { email: session?.user?.email })
      .then((res) => {
        console.log(res.data);
        setToDos(res.data);
      });
  }, [session?.user ,updateUI]);

  if (!session?.user) {
    return <Login />;
  }

  const AddToDos = () => {
    axios
      .post(`${baseURL}/save`, { email: session.user?.email, toDo: input })
      .then((res) => {
        console.log(res.data);
        setInput("");
        setUpdateUI((prevState) => !prevState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="max-w-[300px] mx-auto">
      <Navbar />
      <div className="flex gap-4 mt-4">
        <input
          className="w-full bg-transparent border-b border-accentDark p-2 text-white outline-none"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add ToDo"
        />
        <button
          onClick={AddToDos}
          className="bg-accentDark p-2 to-gray-400 hover:bg-accentLight text-gray-400"
        >
          Add
        </button>
      </div>
      <ul className="space-y-4 pt-8">
        {toDos.map((item: any) => (
          <ToDo key={item._id} id={item._id} text={item.toDo} setUpdateUI={setUpdateUI}/>
        ))}
      </ul>
    </main>
  );
}
