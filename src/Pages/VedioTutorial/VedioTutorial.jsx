import React from "react";
import LeftNav from "../../Components/VedioTutorial/LeftNav";
import Header from "../../Components/VedioTutorial/Header";
import { Container } from "postcss";
import VideoScreen from "../../Components/VedioTutorial/VideoScreen";

const VedioTutorial = () => {
  return (
    <>
      <Header />
      <div className="">
        <LeftNav></LeftNav>
        <Container>
          <VideoScreen></VideoScreen>
        </Container>
      </div>
    </>
  );
};

export default VedioTutorial;
