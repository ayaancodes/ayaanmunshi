"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { IoArrowUpSharp } from "react-icons/io5";

export default function AI() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setInput,
    error,
  } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hello! I'm Salim's AI persona. Ask me anything about him or his work. I'll be happy to assist you.",
      },
    ],
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleButtonClick = (text: string) => {
    setInput(text);
  };

  const isDisabled = isLoading || !input.trim();

  return (
    <>
      <Header showHomeLink={true} />

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
          salix://ai
        </h1>
        <h2 className="text-base font-medium tracking-tight text-foreground">
        have a chat with my AI to know more about me!.
        </h2>

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            Error: {error.message || "Failed to load response"}
          </div>
        )}

        <div className="mt-8 flex flex-col gap-4 h-[calc(100vh-10rem)]">
          <div className="relative flex-1 rounded-lg border border-foreground/10 bg-background/50 backdrop-blur-sm">
            <div className="absolute inset-0 overflow-y-auto overflow-x-hidden p-4 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex flex-col gap-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "assistant"
                        ? "justify-start"
                        : "justify-end"
                    }`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.role === "assistant"
                          ? "bg-foreground/10 text-foreground"
                          : "bg-primary text-background"
                      }`}
                    >
                      {message.content
                        .split(/(\*\*.*?\*\*)|(https?:\/\/[^\s]+)/)
                        .map((part, index) => {
                          if (!part) return null;

                          if (part.startsWith("**") && part.endsWith("**")) {
                            // Handle bold text
                            const boldText = part.slice(2, -2);
                            return (
                              <span
                                key={index}
                                className="font-bold text-white"
                              >
                                {boldText}
                              </span>
                            );
                          } else if (part.startsWith("http")) {
                            // Handle links
                            const url = part;
                            return (
                              <a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline underline-offset-4 transition duration-150 ease-in-out hover:text-primary/80"
                              >
                                {url}
                              </a>
                            );
                          }
                          return part;
                        })
                        .filter(Boolean)}
                    </div>
                  </div>
                ))}
              </div>
              <div ref={messagesEndRef} className="h-4" />
            </div>
          </div>

          <div className="flex w-full justify-between gap-2 pt-4 text-xs">
            <button
              onClick={() =>
                handleButtonClick("What is your design philosophy?")
              }
              className="rounded-lg bg-foreground/10 px-2.5 py-1.5 text-foreground transition duration-300 ease-in-out hover:bg-foreground/20"
              disabled={isLoading}
            >
              What is your design philosophy?
            </button>
            <button
              onClick={() => handleButtonClick("Are you available for hire?")}
              className="rounded-lg bg-foreground/10 px-2.5 py-1.5 text-foreground transition duration-300 ease-in-out hover:bg-foreground/20"
              disabled={isLoading}
            >
              Are you available for hire?
            </button>
            <button
              onClick={() =>
                handleButtonClick(
                  "How much time does it take for you to design & code a website?"
                )
              }
              className="rounded-lg bg-foreground/10 px-2.5 py-1.5 text-foreground transition duration-300 ease-in-out hover:bg-foreground/20"
              disabled={isLoading}
            >
              How much time does it take?
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex-none pt-4">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                disabled={isLoading}
                className={`border-foreground/10 flex-1 rounded-l-full border border-r-0 bg-[#0A0A0A] px-4 py-2.5 focus:ring-0 focus:outline-none placeholder:text-primary${
                  isLoading ? "cursor-not-allowed" : "cursor-auto"
                }`}
                placeholder="Ask about me or my work!"
              />
              <button
                type="submit"
                disabled={isDisabled}
                aria-label="Send message"
                name="send message"
                className="border-foreground/10 rounded-r-full border border-l-0 px-1.5 focus:ring-0 focus:outline-none"
              >
                <div
                  className={`rounded-full p-2 ${
                    isDisabled
                      ? "bg-foreground/10 transition duration-300 ease-in-out"
                      : "bg-primary transition duration-300 ease-in-out hover:bg-primary/90"
                  }`}
                >
                  <IoArrowUpSharp
                    className={`${
                      isDisabled ? "text-foreground/50" : "text-background"
                    }`}
                  />
                </div>
              </button>
            </div>
          </form>

          <p className="text-foreground/70 pt-4 text-sm">
            Everyone makes mistakes, including this AI powered by{" "}
            <a
              href="https://ai.google.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 transition duration-150 ease-in-out hover:underline"
            >
              Google's Gemini 2.0 Flash
            </a>{" "}
            and{" "}
            <a
              href="https://sdk.vercel.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 transition duration-150 ease-in-out hover:underline"
            >
              Vercel AI SDK
            </a>
            . Make sure to double-check important information.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
