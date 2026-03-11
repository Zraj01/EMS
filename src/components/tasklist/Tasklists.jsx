import React from "react";

const TaskLists = () => {
  return (
    <div className="flex gap-5 overflow-x-auto p-6 bg-black">

      <div className="min-w-[280px] bg-red-400 p-6 rounded-xl text-white">
        <div className="flex justify-between mb-3">
          <span className="bg-red-600 px-2 py-1 rounded text-sm">High</span>
          <span className="text-sm">20 Feb 2024</span>
        </div>

        <h2 className="text-xl font-bold mb-2">Make a youtube video</h2>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam libero quisquam.
        </p>
      </div>

      <div className="min-w-[280px] bg-green-400 p-6 rounded-xl text-white">
        <div className="flex justify-between mb-3">
          <span className="bg-red-600 px-2 py-1 rounded text-sm">High</span>
          <span className="text-sm">20 Feb 2024</span>
        </div>

        <h2 className="text-xl font-bold mb-2">Make a youtube video</h2>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="min-w-[280px] bg-blue-400 p-6 rounded-xl text-white">
        <div className="flex justify-between mb-3">
          <span className="bg-red-600 px-2 py-1 rounded text-sm">High</span>
          <span className="text-sm">20 Feb 2024</span>
        </div>

        <h2 className="text-xl font-bold mb-2">Make a youtube video</h2>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="min-w-[280px] bg-yellow-400 p-6 rounded-xl text-white">
        <div className="flex justify-between mb-3">
          <span className="bg-red-600 px-2 py-1 rounded text-sm">High</span>
          <span className="text-sm">20 Feb 2024</span>
        </div>

        <h2 className="text-xl font-bold mb-2">Make a youtube video</h2>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

    </div>
  );
};

export default TaskLists;