import React, { useContext, useEffect, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { IoMdSend } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config/config";
import AuthContext from "../../Context/AuthProvider";
import Swal from "sweetalert2";
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
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {};
  const course = item?.id;
  console.log("itemsssss", item);
  const { auth } = useContext(AuthContext);
  const token = auth?.user?.jwtToken;
  const Role = auth?.user?.role;

  if (Role !== "TEACHER" && Role !== "STUDENT") {
    navigate("/");
  }

  const [meetingLink, setMeetingLink] = useState("");
  const [meetingTime, setMeetingTime] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const respone = await axios.post(
        `${baseUrl}/meeting/create`,
        {
          meetingLink,

          course,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("meeeeeetng", respone.data);
      Swal.fire("Link created ");
    } catch (err) {
      console.log("error", err);
    }
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
        className=" flex-1 mx-auto pt-80 min-h-screen max-w-6xl items-center justify-center mb-10 "
        ref={myMeeting}
      ></div>
      {Role && Role === "TEACHER" && (
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
              {/* <input
                className="px-4 py-1 rounded-lg"
                type="datetime-local"
                value={meetingTime}
                onChange={(e) => setMeetingTime(e.target.value)}
                required
              /> */}
              <button type="submit" className="text-blue-600 text-4xl">
                <IoMdSend />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCall;
