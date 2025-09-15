import { useState, useEffect } from "react";
import Chat from "./components/Chat";
import Profile from "./components/Profile";

export default function App() {
  const [chats, setChats] = useState(
    JSON.parse(localStorage.getItem("chatHistory")) || []
  );
  const [currentChat, setCurrentChat] = useState({
    user: [],
    bot: [],
  });
  const [showProfile, setShowProfile] = useState(false);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chats));
  }, [chats]);

  const handleNewChat = () => {
    if (currentChat.user.length > 0 || currentChat.bot.length > 0) {
      setChats([...chats, currentChat]);
    }
    setCurrentChat({ user: [], bot: [] });
  };

  return (
    <div className="flex h-screen bg-[#1E1E1E] text-white">
      <div className="flex-1 flex flex-col">
        <header className="p-4 flex justify-between items-center bg-[#2A2A2A]">
          <h1 className="text-xl font-bold">React Chat Box</h1>
          <button
            className="px-3 py-1 bg-gray-600 rounded"
            onClick={() => setShowProfile(!showProfile)}
          >
            {showProfile ? "Close" : "Profile"}
          </button>
        </header>

        {showProfile ? (
          <Profile setShowProfile={setShowProfile} />
        ) : (
          <Chat currentChat={currentChat} setCurrentChat={setCurrentChat}  handleNewChat={handleNewChat} />
        )}
      </div>
    </div>
  );
}
