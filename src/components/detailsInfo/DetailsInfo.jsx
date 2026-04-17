import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaBoxArchive } from "react-icons/fa6";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { MdTextsms } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import toast from "react-hot-toast";

const DetailsInfo = ({ expectedFriend }) => {
  const saveLog = (type) => {
    const newLog = {
      id: Date.now(),
      name: expectedFriend.name,
      type: type, // "call" | "text" | "video"
      time: new Date().toLocaleString(),
    };

    const existingLogs = JSON.parse(localStorage.getItem("logs")) || [];

    localStorage.setItem("logs", JSON.stringify([newLog, ...existingLogs]));
  };

  const handleCall = () => {
    saveLog("Call");
    toast.success(`Calling ${expectedFriend.name} `);
  };

  const handleText = () => {
    saveLog("Text");
    toast.success(`Texting ${expectedFriend.name} `);
  };

  const handleVideo = () => {
    saveLog("Video");
    toast.success(`Starting video call with ${expectedFriend.name} `);
  };

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex flex-col md:flex-row gap-6 my-20">
      <div className="space-y-4 flex-1">
        <div className="card bg-base-200 w-full ">
          <div className="text-center bg-white shadow-xl rounded-2xl space-y-3 p-6">
            <div className="flex justify-center mt-5">
              <img
                src={expectedFriend.picture}
                alt={expectedFriend.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#CBFADB]"
              />
            </div>
            <h1 className="text-3xl font-bold">{expectedFriend.name}</h1>

            <div
              className={`px-3 py-1 rounded-full text-white w-fit mx-auto mt-2 ${
                expectedFriend.status === "overdue"
                  ? "bg-red-500"
                  : expectedFriend.status === "almost due"
                    ? "bg-yellow-500"
                    : "bg-green-800"
              }`}
            >
              {expectedFriend.status}
            </div>
            <div className="flex justify-center items-center gap-2">
              {expectedFriend.tags.map((tag) => {
                return (
                  <div
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#CBFADB] w-fit"
                  >
                    <h1 className="text-[#244D3F] text-sm">{tag}</h1>
                  </div>
                );
              })}
            </div>
            <div>
              <p className="italic">"{expectedFriend.bio}"</p>
            </div>
            <div>
              <p>Email: {expectedFriend.email}</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl p-4 text-center rounded-xl">
          <p className="flex justify-center items-center gap-2">
            <RiNotificationSnoozeLine />
            Snooze 2 Weeks
          </p>
        </div>
        <div className="bg-white shadow-xl p-4 text-center rounded-xl">
          <p className="flex justify-center items-center gap-2">
            {" "}
            <FaBoxArchive />
            Archive
          </p>
        </div>
        <div className="bg-white shadow-xl p-4 text-center rounded-xl">
          <p className="text-red-600 flex justify-center items-center gap-2">
            <RiDeleteBin6Line /> Delete
          </p>
        </div>
      </div>

      <div className="flex-2">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white text-center py-15 rounded shadow-xl">
            <h1 className="text-3xl font-bold">
              {expectedFriend.days_since_contact}
            </h1>
            <p>Days Since Contact</p>
          </div>
          <div className="bg-white text-center py-15 rounded shadow-xl">
            <h1 className="text-3xl font-bold">{expectedFriend.goal}</h1>
            <p>Goal (Days)</p>
          </div>
          <div className="bg-white text-center py-15 rounded shadow-xl">
            <h1 className="text-3xl font-bold">
              {expectedFriend.next_due_date}
            </h1>
            <p>Next Due</p>
          </div>
        </div>

        <div className="p-10 bg-white rounded shadow-xl mt-10">
          <div className="flex justify-between">
            <p className="text-xl">Relationship Goal</p>
            <div className="btn">Edit</div>
          </div>
          <div>
            <p>
              Connect every <span className="font-bold">30 days</span>
            </p>
          </div>
        </div>

        <div className="p-7 bg-white rounded shadow-xl mt-10">
          <p className="font-semibold mb-2">Quick Check-in</p>
          <div className="grid grid-cols-3 gap-3 md:gap-10">
            <button
              onClick={handleCall}
              className="bg-base-300 py-6 flex text-xl flex-col rounded justify-center items-center"
            >
              <MdCall />
              <p>Call</p>
            </button>
            <button
              onClick={handleText}
              className="bg-base-300 py-6 flex text-xl flex-col rounded justify-center items-center"
            >
              <MdTextsms />
              <p>Text</p>
            </button>
            <button
              onClick={handleVideo}
              className=" bg-base-300 py-6 flex text-xl flex-col rounded justify-center items-center"
            >
              <FaVideo />
              <p>Video</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsInfo;
