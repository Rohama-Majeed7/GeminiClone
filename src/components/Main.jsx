import React, { useContext, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegCompass } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { Context } from "../Context/Context";
const Main = () => {
  const [showMenu, setShowmenu] = useState(false);
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <React.Fragment>
      <section className="w-full relative p-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <p>Gemini</p>
            <FaCaretDown
              onClick={() => {
                setShowmenu(!showMenu);
              }}
            />
          </div>
          <FaRegCircleUser className="text-2xl" />
        </div>
        {showMenu ? (
          <div className="absolute top-9 left-1 py-2 px-4 bg-[#d5d5d5] rounded-md flex flex-col gap-3 shadow-lg shadow-slate-500/50">
            <div className="flex items-center gap-4">
              <p>Gemini</p>
              <SiTicktick />
            </div>
            <p className="bg-white p-1 rounded-sm text-center">Upgrade</p>
          </div>
        ) : null}
        {!showResult ? (
          <main className="flex justify-center items-center w-10/12 mt-[70px] mx-auto">
            <div className="p-1">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl md:text-5xl text-left font-bold">
                  <span className="text-[#5880ea]  text-5xl text-left font-bold">
                    Hello,
                  </span>{" "}
                  <span className="text-[#d96570]">Rohama</span>{" "}
                </h1>
                <h1 className="text-2xl md:text-5xl text-left font-bold text-[#f0f4f9]">
                  How can I help you today?
                </h1>
              </div>
              <div className="hidden md:inline-flex justify-between h-full gap-2 mt-[80px]">
                <article className="h-40 p-4 flex flex-col justify-between gap-3 hover:bg-[#c4c7c5] bg-[#f0f4f9] rounded-md">
                  <p>Help me find the latest trends</p>
                  <FaRegCompass className="self-end text-xl" />
                </article>
                <article className="h-40 p-4 flex flex-col justify-between gap-3 hover:bg-[#c4c7c5] bg-[#f0f4f9] rounded-md">
                  <p>Help me find the latest trends</p>
                  <FaRegCompass className="self-end text-xl" />
                </article>
                <article className="h-40 p-4 flex flex-col justify-between gap-3 hover:bg-[#c4c7c5] bg-[#f0f4f9] rounded-md">
                  <p>Help me find the latest trends</p>
                  <FaRegCompass className="self-end text-xl" />
                </article>
                <article className="h-40 p-4 flex flex-col justify-between gap-3 hover:bg-[#c4c7c5] bg-[#f0f4f9] rounded-md">
                  <p>Help me find the latest trends</p>
                  <FaRegCompass className="self-end text-xl" />
                </article>
              </div>
              <div className="flex justify-between items-center m-auto fixed w-11/12 md:w-9/12  md:left-[100px] md:right-0 md:bottom-0 bottom-0 left-1 right-1  p-4 rounded-full bg-[#f0f4f9]">
                <input
                  type="text"
                  placeholder="Enter a prompt here.."
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  className="outline-none bg-transparent"
                />
                <div className="flex gap-4">
                  <input type="file" style={{ display: "none" }} id="image" />
                  <label htmlFor="image">
                    <LuImagePlus className="text-xl" />
                  </label>
                  <FaMicrophone className="text-xl" />
                  <IoSendSharp onClick={() => onSent()} className="text-xl" />
                </div>
              </div>
            </div>
          </main>
        ) : (
          <div className="flex flex-col gap-3 p-4 mt-[40px]">
            <div>
              <div className="flex gap-3">
                <FaRegCircleUser className="text-2xl" />
                <p>{recentPrompt}</p>
              </div>
              <div>
                {loading ? (
                  <div className="mt-4">
                    <hr className="w-full h-4 bg-cyan-400 rounded-lg" />
                    <hr className="w-full h-4 bg-cyan-400 rounded-lg my-2" />
                    <hr className="w-full h-4 bg-cyan-400 rounded-lg" />{" "}
                  </div>
                ) : (
                  <div  className="bg-[#c5c5c5a8] p-4 rounded-md overflow-x text-justify mt-2 mb-8">
                    {resultData}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center m-auto fixed w-11/12 md:w-10/12  md:left-0 md:right-0 md:bottom-0 bottom-0 left-1 right-1 p-4 rounded-full bg-[#f0f4f9]">
              <input
                type="text"
                placeholder="Enter a prompt here.."
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className="outline-none bg-transparent"
              />
              <div className="flex gap-4">
                <input type="file" style={{ display: "none" }} id="image" />
                <label htmlFor="image">
                  <LuImagePlus className="text-xl" />
                </label>
                <FaMicrophone className="text-xl" />
                <IoSendSharp onClick={() => onSent()} className="text-xl" />
              </div>
            </div>
          </div>
        )}
      </section>
    </React.Fragment>
  );
};

export default Main;
