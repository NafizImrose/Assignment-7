import React from "react";
import { Link } from "react-router";

const DataLoad = ({ data }) => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto mt-15 mb-10">
      <h1 className="text-3xl font-bold mb-5">Your friends</h1>

      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((friend) => {
          return (
            <Link
              to={`/friend-details/${friend.id}`}
              key={friend.id}
              className="text-center bg-white shadow-2xl rounded-2xl space-y-3 p-6"
            >
              <div className="flex justify-center mt-5">
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#CBFADB]"
                />
              </div>
              <h1 className="text-3xl font-bold">{friend.name}</h1>
              <p>
                <span>{friend.days_since_contact}</span>d ago
              </p>
              <div className="flex justify-center items-center gap-2">
                {friend.tags.map((tag) => {
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

              <div
                className={`px-3 py-1 rounded-full text-white w-fit mx-auto mt-2 ${
                  friend.status === "overdue"
                    ? "bg-red-500"
                    : friend.status === "almost due"
                      ? "bg-yellow-500"
                      : "bg-green-800"
                }`}
              >
                {friend.status}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DataLoad;
