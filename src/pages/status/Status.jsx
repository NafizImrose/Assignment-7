import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Status = () => {
  const [logs] = useState(() => {
    return JSON.parse(localStorage.getItem("logs")) || [];
  });

  const count = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  logs.forEach((log) => {
    if (count[log.type] !== undefined) {
      count[log.type]++;
    }
  });

  const data = [
    { name: "Call", value: count.Call },
    { name: "Text", value: count.Text },
    { name: "Video", value: count.Video },
  ];

  const COLORS = ["#244D3F", "#3B82F6", "#A855F7"];

  return (
    <div className="w-11/12 md:w-8/12 mx-auto mt-10 text-center bg-white p-10 shadow-sm">
      <h1 className="text-3xl text-left font-bold mb-8 text-[#244D3F]">
        Friendship Analytics
      </h1>

      <p className="text-left mb-4">By Interaction Type</p>

      {logs.length === 0 ? (
        <p className="text-gray-500 text-xl">No data yet.....</p>
      ) : (
        <div className="w-full h-[400px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={95}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Status;
