// import React, { useState } from "react";
// import { MdCall, MdTextsms } from "react-icons/md";
// import { FaVideo } from "react-icons/fa";

// const Timeline = () => {
//   const [logs] = useState(() => {
//     return JSON.parse(localStorage.getItem("logs")) || [];
//   });

//   const getIcon = (type) => {
//     if (type === "Call") return <MdCall />;
//     if (type === "Text") return <MdTextsms />;
//     if (type === "Video") return <FaVideo />;
//   };

//   return (
//     <div className="w-8/12 mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-5">Activity Timeline</h1>

//       <div className="space-y-4">
//         {logs.map((log) => (
//           <div
//             key={log.id}
//             className="bg-white shadow p-4 rounded-xl flex items-center gap-4"
//           >
//             {/* Icon */}
//             <div className="text-2xl text-[#244D3F]">{getIcon(log.type)}</div>

//             {/* Text */}
//             <div>
//               <h2 className="text-lg font-semibold">
//                 {log.type} with {log.name}
//               </h2>
//               <p className="text-sm text-gray-500">{log.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;

import React, { useState } from "react";
import { MdCall, MdTextsms } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

const Timeline = () => {
  const [logs] = useState(() => {
    return JSON.parse(localStorage.getItem("logs")) || [];
  });

  const [filter, setFilter] = useState("All");

  const getIcon = (type) => {
    if (type === "Call") return <MdCall />;
    if (type === "Text") return <MdTextsms />;
    if (type === "Video") return <FaVideo />;
  };

  const filteredLogs =
    filter === "All" ? logs : logs.filter((log) => log.type === filter);

  return (
    <div className="w-11/12 md:w-8/12 mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-[#244D3F]">Timeline</h1>

      {/* Dropdown Filter */}
      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="All">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* Empty state */}
      {filteredLogs.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No activity found 😴</p>
      )}

      {/* Logs */}
      <div className="space-y-4 mb-6">
        {filteredLogs.map((log) => (
          <div
            key={log.id}
            className="bg-white shadow p-4 rounded-xl flex items-center gap-4"
          >
            <div className="text-2xl text-[#244D3F]">{getIcon(log.type)}</div>

            <div>
              <h2 className="text-lg font-semibold">
                {log.type} with {log.name}
              </h2>
              <p className="text-sm text-gray-500">{log.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
