import React, { useState } from "react";

export default function MessagingWidget() {
  const [view, setView] = useState("minimized");

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: "20px",
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "8px 8px 0 0",
        background: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        overflow: "hidden",
        transition: "height 0.4s ease",
        height: view === "minimized" ? "45px" : "450px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header sempre visibile */}
      <button
        style={{
          height: "45px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          border: "1px solid #eee",
          cursor: "pointer",
          padding: "0 8px",
          fontWeight: "bold",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#f0f0f0")
        }
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
        onClick={() => setView(view === "minimized" ? "list" : "minimized")}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            src="https://epicode-testapi-bucket.s3.eu-south-1.amazonaws.com/1756971673963-catzillawall.png"
            alt="Profilo"
          />
          <h6 style={{ margin: "0 0 0 8px", fontSize: "13px" }}>
            Messaggistica
          </h6>
        </div>

        {/* Simboli a destra */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <i className="bi bi-three-dots" style={{ fontSize: "13px" }}></i>
          <i className="bi bi-pencil-square" style={{ fontSize: "13px" }}></i>
          <span style={{ fontSize: "13px" }}>
            {view === "minimized" ? "▲" : "▼"}
          </span>
        </div>
      </button>

      {/* SEARCH BAR */}
      {view !== "minimized" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "6px 8px",
            borderBottom: "1px solid #ddd",
            gap: "4px",
          }}
        >
          {/* Icona lente */}
          <i
            className="bi bi-search"
            style={{ fontSize: "14px", color: "#666" }}
          ></i>

          {/* Input di ricerca */}
          <input
            type="text"
            placeholder="Cerca messaggi"
            style={{
              flex: 1,
              padding: "6px 10px",
              borderRadius: "16px",
              border: "1px solid #ccc",
              fontSize: "12px",
            }}
          />

          {/* Icona filtri a destra */}
          <i
            class="bi bi-list"
            style={{ fontSize: "14px", color: "#666", cursor: "pointer" }}
          ></i>
        </div>
      )}

      {/* Contenuto lista e chat */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          opacity: view === "minimized" ? 0 : 1,
          pointerEvents: view === "minimized" ? "none" : "auto",
          transition: "opacity 0.3s ease",
        }}
      >
        {view === "list" && <MessageList onOpenChat={() => setView("chat")} />}
        {view === "chat" && <ChatWindow onBack={() => setView("list")} />}
      </div>
    </div>
  );
}

function MessageList({ onOpenChat }) {
  const messages = [
    { id: 1, name: "Anna De Lise", text: "Ciao Valerio 👋" },
    { id: 2, name: "Antimo Mandorino", text: "Messaggio InMail..." },
    { id: 3, name: "Davide Biraghi", text: "Offerta di lavoro 🚀" },
    { id: 3, name: "Mattia Pastorini", text: "File pdf" },
  ];

  return (
    <div>
      {messages.map((m) => (
        <div
          key={m.id}
          style={{
            padding: "8px",
            borderBottom: "1px solid #eee",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f0f0f0")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "white")
          }
          onClick={onOpenChat}
        >
          <div className="pb-2 d-flex justify-content-between">
            <div>
              <img
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                src="https://epicode-testapi-bucket.s3.eu-south-1.amazonaws.com/1756971673963-catzillawall.png"
                alt="Profilo"
              />
              <strong className="ps-2">{m.name}</strong>
            </div>
            <h6>
              <i class="bi bi-three-dots"></i>
            </h6>
          </div>
          <p style={{ margin: 0, fontSize: "12px", color: "gray" }}>{m.text}</p>
        </div>
      ))}
    </div>
  );
}

function ChatWindow({ onBack }) {
  const [chat, setChat] = useState([
    { from: "other", text: "Ciao Valerio, come stai?" },
    { from: "me", text: "Tutto bene, grazie!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setChat([...chat, { from: "me", text: input }]);
    setInput("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          padding: "8px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={onBack}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          ←
        </button>
        <strong>Chat con Anna De Lise</strong>
        <button
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          —
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "8px" }}>
        {chat.map((msg, i) => (
          <div
            key={i}
            style={{ textAlign: msg.from === "me" ? "right" : "left" }}
          >
            <span
              style={{
                display: "inline-block",
                background: msg.from === "me" ? "#0073b1" : "#eee",
                color: msg.from === "me" ? "white" : "black",
                padding: "6px 10px",
                borderRadius: "12px",
                margin: "4px 0",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{ display: "flex", borderTop: "1px solid #ddd", padding: "8px" }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            border: "1px solid #ccc",
            borderRadius: "20px",
            padding: "6px",
          }}
        />
        <button
          onClick={sendMessage}
          style={{ marginLeft: "8px", cursor: "pointer" }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}
