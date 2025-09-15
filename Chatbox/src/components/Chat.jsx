import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

const replyMap = {
  // Greetings
  hello: "Hi, hello! 👋",
  hi: "Hello there! 😊",
  hey: "Hey! How are you doing?",
  "good morning": "Good morning! 🌞 Have a great day ahead.",
  "good night": "Good night! 🌙 Sweet dreams.",
  bye: "Goodbye! 👋 Safe travels.",

  // Travel & Bus
  bus: "You can check your booked ticket in My Bookings 🚍",
  ticket: "Open the GRTS app → My Bookings to see your ticket 🎟️",
  station: "You can check your bus station on your ticket details 🏢",
  timing: "Bus timings are mentioned on your ticket ⏰",
  seat: "Your seat number is printed on the ticket 🪑",
  operator: "The bus operator’s name is available in your ticket details 🚌",
  cancel: "To cancel your ticket, go to My Bookings → Cancel ❌",
  refund: "Refund will be processed within 3-5 working days 💳",
  delay: "If the bus is delayed, updates will be shown in the app ⏳",

  // Casual chat
  thanks: "You're welcome! 😊",
  ok: "Okay 👍",
  fine: "Glad to hear that! 😃",
  help: "Sure! Tell me what you need help with 🆘",
  "who are you": "I’m your GRTS chat assistant 🤖",
  "how are you": "I'm doing great, thanks for asking! 🚀",
  "what's up": "Just helping you with your travel queries 🌍",
};

const fallbackReply = "I didn’t get that, can you repeat?";

const Chat = () => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [];
  });

  const inputRef = useRef();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  // Auto scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const text = inputRef.current.value.trim();
    if (!text) return;

    const lowerText = text.toLowerCase();
    let reply = fallbackReply;

    for (let key in replyMap) {
      if (lowerText.includes(key)) {
        reply = replyMap[key];
        break;
      }
    }

    const newMessages = [
      ...messages,
      { sender: "user", text },
      { sender: "bot", text: reply },
    ];

    setMessages(newMessages);
    inputRef.current.value = "";
  };

  const handleClear = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages");
  };

  return (
    <div className="flex flex-col h-full bg-[#121212]">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <ChatMessage key={i} sender={m.sender} text={m.text} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-[#1E1E1E] border-t border-gray-700 flex gap-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white outline-none"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-500"
        >
          Send
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-500"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Chat;
