import ReactPlayer from "react-player";
import "./css/style.css";
import React, { useState, useEffect } from "react";

function View() {
  const [videos, setVideos] = useState([
    {
      title: "",
      description: "",
      url: "",
    },
  ]);

  useEffect(() => {
    fetch("/video/617252ce83f998658c61d1a0")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setVideos(jsonRes.video))
      .catch((error) => console.log("error", error));
  });
  return (
    <div className="view-course">
      {videos.map((allvideo) => {
        return (
          <div className="view-box">
            <div className="youtubeBox">
              <ReactPlayer url={allvideo.url} className="player" controls />
            </div>
            <h2>{allvideo.title}</h2>
            <p>{allvideo.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default View;
