import { useRef, useState, useEffect } from 'react';
import './information.css'
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam"
import {drawHand} from "./utilities"
import * as fp from "fingerpose";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";

function Information() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory }; 

  const runHandpose = async () => {
    const net = await handpose.load()
    console.log('Loaded Handpose Model')
    setInterval(() => {
      detect(net)
    }, 10);

  };

  const detect = async (net) => {
    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState ===4) {
      const video =webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width =videoWidth
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);
      console.log(hand);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture, 
        ]);

        const gesture = await GE.estimate(hand[0].landmarks, 8);
        console.log(gesture);
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  runHandpose();

  return (
    <>
        <div className = 'App'>
          <header className  = 'App-header'>
            <Webcam ref = {webcamRef}
            style = {{
              position: "absolute",
              zindex: 9,
              width: 1000,
              height: 800,
              right: 840
            }} />
            <canvas ref = {canvasRef}
            style = {{
              position: "absolute",
              zindex: 9,
              width: 1000,
              height: 800,
              right: 840
            }}/>
            {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          ""
        )}
          </header>
        </div>
    </>
  )
}

export default Information
