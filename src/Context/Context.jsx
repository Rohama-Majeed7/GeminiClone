import { createContext, useState } from "react";
import run from "../Config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState([]);

  const delayPara = ( text) => {
    setTimeout(() => {
      setResultData((prev) => [...prev, text]);
    }, 75* 1000); // Adjust the delay as needed (1000 ms here for paragraph delay)
  };
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };
  const onSent = async (prompt) => {
    setResultData([]);
    setLoading(true);
    setShowResult(true);
    let response;

    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }

    const paragraphs = response.split("\n"); // Split response by new line for paragraphs

    paragraphs.forEach((paragraph, index) => {
      paragraph
        .split("**")
        .map((part, i) => i % 2 === 1 && part)
        .join("");
      delayPara(index, paragraph);
    });

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
