export default function ChatMessage({ text, sender }) {
  return (
    <div
      className={`max-w-[15%] break-words px-4 py-2 rounded-2xl 
        ${sender === "user" ? "bg-blue-600 text-white self-end ml-auto" : "bg-gray-700 text-white self-start mr-auto"}`}
    >
      {text}
    </div>
  );
}
