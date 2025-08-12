import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.jpg";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi there! I'm your SmartBite AI assistant. How can I help you today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (!userInput.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text: userInput }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Thanks for your message! (This is a mock reply 😄)",
        },
      ]);
    }, 1000);

    setUserInput("");
  };

  return (
    <div className="home-container">
      <div className="content">
        <div className="text-section">
          <h1>
            Welcome to <span className="brand">SmartBite</span>
          </h1>
          <p>
            Your AI-powered nutrition assistant for personalized, healthy
            eating. Track your meals, get smart recommendations, and eat
            better—effortlessly.
          </p>
          <button className="cta-button" onClick={() => navigate("/join")}>
            Get Started
          </button>
        </div>
        <div className="image-section">
          <img src={hero} alt="Healthy food bowl" />
        </div>
      </div>

      {/* ✅ Chat Assistant */}
      <div className="chat-assistant">
        <div className="chat-icon" onClick={() => setIsChatOpen(!isChatOpen)}>
          💬
        </div>

        {isChatOpen && (
          <div className="chat-box">
            <div className="chat-header">SmartBite Assistant</div>
            <div className="chat-body">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.type}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
