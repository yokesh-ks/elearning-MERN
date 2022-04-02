import "../css/style.css";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

function Create() {
  const [youtubeVideo, setYoutubeVideo] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");
  const [youtubeError, setYoutubeError] = useState("");
  const handleYoutubeChange = (e) => {
    setYoutubeVideo(e.target.value);
  };
  const [video, setVideo] = useState([
    {
      title: "",
      description: "",
    },
  ]);

  function handleChange(e) {
    const { name, value } = e.target;
    setVideo((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  async function publish(e) {
    e.preventDefault();
    try {
      const newVideo = {
        insertVideo: {
          video: {
            title: video.title,
            description: video.description,
            url: youtubeURL,
          },
        },
      };
      console.log(newVideo);
      await axios.put("/addvideo/617252ce83f998658c61d1a0", newVideo);
      alert("video added added");
    } catch (error) {
      console.log(error);
    }
  }

  const handleYoutubeSubmit = (e) => {
    e.preventDefault();
    const youtubeRegex =
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
    if (youtubeRegex.test(youtubeVideo)) {
      setYoutubeURL(youtubeVideo);
      setYoutubeError("");
    } else {
      setYoutubeError("Invalid youtube URL");
    }
    setYoutubeURL(youtubeVideo);
  };

  return (
    <div className="create">
      <form>
        <h1>Create Course</h1>
        <label>Title</label>
        <input
          type="text"
          onChange={handleChange}
          Placeholder="Enter the Title"
          name="title"
          value={video.title}
        ></input>
        <label>Description</label>
        <textarea
          type="text"
          onChange={handleChange}
          Placeholder="Enter brief Description"
          name="description"
          value={video.description}
        ></textarea>
        <button onClick={publish} className="publish-button">
          Publish
        </button>
      </form>
      <div className="youtube-link">
        <form onSubmit={handleYoutubeSubmit}>
          <input
            type="text"
            Placeholder="Enter Youtube Url"
            required
            onChange={handleYoutubeChange}
          ></input>
          <button className="youtube-button">View</button>
        </form>
        {youtubeError && <div className="error-msg">{youtubeError} </div>}

        <div className="youtubeBox">
          <ReactPlayer className="player" url={youtubeURL} controls />
        </div>
      </div>
    </div>
  );
}

export default Create;
