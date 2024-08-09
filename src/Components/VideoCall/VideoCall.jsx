import React, { useEffect, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { IoMdSend } from "react-icons/io";
import { useLocation } from "react-router-dom";

const mystyle = {};
function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

const VideoCall = () => {
  const location = useLocation();
  const { item } = location.state || {};
  console.log("item from video", item);
  const [meetingLink, setMeetingLink] = useState("");
  const [meetingTime, setMeetingTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Meeting Link:", meetingLink);
    console.log("Meeting Time:", meetingTime);
  };
  const roomID = getUrlParams().get("roomID") || randomID(5);

  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 76830853;
    const serverSecret = "25873c35ed133a6d1d204c685b0809b1";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    try {
      // start the call
      await zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "copy link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    } catch (error) {
      if (error.name === "NotFoundError") {
        console.error(
          "Media device not found. Please check your camera and microphone."
        );
      } else {
        console.error("Error joining the room: ", error);
      }
    }
  };

  useEffect(() => {
    // Check for media devices
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        const hasVideoInput = devices.some(
          (device) => device.kind === "videoinput"
        );
        const hasAudioInput = devices.some(
          (device) => device.kind === "audioinput"
        );

        if (!hasVideoInput) {
          console.warn("No video input device found.");
        }
        if (!hasAudioInput) {
          console.warn("No audio input device found.");
        }
      })
      .catch((err) => {
        console.error("Error enumerating devices: ", err);
      });
  }, []);

  //   api from send link student

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className=" flex-1 mx-auto pt-80 min-h-screen max-w-6xl items-center justify-center "
        ref={myMeeting}
      ></div>
      <div className="flex justify-center items-start flex-1 pb-20">
        <div className=" bg-slate-400 rounded-lg p-10 flex flex-col">
          <label className="text-blue-800 text-2xl font-bold" htmlFor="">
            Share link with students
          </label>
          <form className="flex space-x-2" onSubmit={handleSubmit}>
            <input
              className="px-4 py-1 rounded-lg"
              type="text"
              placeholder="Paste the meeting link here"
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
            />
            <input
              className="px-4 py-1 rounded-lg"
              type="text"
              placeholder="HH:MM AM/PM"
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              pattern="^(0?[1-9]|1[0-2]):([0-5][0-9])\s?(AM|PM)$"
              title="Please enter a valid time in the format HH:MM AM/PM"
              required
            />
            <button type="submit" className="text-blue-600 text-4xl">
              <IoMdSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
