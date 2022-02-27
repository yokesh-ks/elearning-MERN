import ReactPlayer from "react-player";
import "../css/style.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";

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
    <Layout>
      <GridContainer>
        {videos.map((allvideo) => {
          return (
            <Card>
              <div className="youtubeBox">
                <ReactPlayer url={allvideo.url} className="player" controls />
              </div>
              <CardTitle>{allvideo.title}</CardTitle>
              <CardDesc>{allvideo.description}</CardDesc>
            </Card>
          );
        })}
      </GridContainer>
    </Layout>
  );
}

export default View;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0.8rem 0.8rem 1.4rem rgba(200, 208, 231, 1),
    -0.2rem -0.2rem 1.8rem rgba(255, 255, 255, 1);
`;

const CardTitle = styled.h2`
  margin-top: 8px;
  font-size: 20px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-transform: upperCase;
`;

const CardDesc = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #9baacf;
`;
