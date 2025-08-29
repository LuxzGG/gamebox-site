import React, { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("games");

  return (
    <div style={{ fontFamily: "sans-serif", background: "#111", color: "#fff", minHeight: "100vh" }}>
      <header style={{ padding: "10px", borderBottom: "1px solid #333" }}>
        <h1>📱 GameBox + Tube</h1>
        <button onClick={() => setTab("games")} style={{ marginRight: "10px" }}>Games</button>
        <button onClick={() => setTab("youtube")}>YouTube</button>
      </header>

      <main style={{ padding: "20px" }}>
        {tab === "games" ? <GamesHub /> : <YouTubeEmbedder />}
      </main>
    </div>
  );
}

function GamesHub() {
  return (
    <div>
      <h2>🎮 Games</h2>
      <p>For now, you can add simple JavaScript games here. (Snake, TicTacToe, etc.)</p>
    </div>
  );
}

function YouTubeEmbedder() {
  const [videoId, setVideoId] = useState("");

  return (
    <div>
      <h2>▶ YouTube Embed</h2>
      <input
        type="text"
        placeholder="Enter YouTube video ID (e.g., dQw4w9WgXcQ)"
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
        style={{ width: "300px", marginRight: "10px" }}
      />
      {videoId && (
        <div style={{ marginTop: "20px" }}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
