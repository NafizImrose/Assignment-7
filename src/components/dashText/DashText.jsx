import React from "react";
import { FaPlus } from "react-icons/fa6";

const DashText = () => {
  return (
    <div>
      <div className="text-center space-y-5 mt-15 ">
        <h1 className="text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="bg-[#244D3F] text-white p-2 rounded">
          {" "}
          <div className="flex justify-center items-center gap-2">
            <FaPlus />
            Add a Friend
          </div>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 md:w-10/12 lg:w-8/12 mx-auto mt-6">
        <div className="text-center bg-white py-15 shadow-md rounded-2xl">
          <h1 className="text-2xl font-semibold">10</h1>
          <p>Total Friends</p>
        </div>
        <div className="text-center bg-white py-15 shadow-md rounded-2xl">
          <h1 className="text-2xl font-semibold">3</h1>
          <p>On Track</p>
        </div>
        <div className="text-center bg-white py-15 shadow-md rounded-2xl">
          <h1 className="text-2xl font-semibold">6</h1>
          <p>Need Attention</p>
        </div>
        <div className="text-center bg-white py-15 shadow-md rounded-2xl">
          <h1 className="text-2xl font-semibold">12</h1>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default DashText;
