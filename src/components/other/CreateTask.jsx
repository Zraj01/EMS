import React from 'react'

const CreateTask = () => {
  return (
    <div> <div className="min-h-screen bg-black flex flex-col items-center pt-16">

      <h1 className="text-4xl text-white font-bold mb-10">
        Admin Panel
      </h1>

      <div className="bg-zinc-900 p-6 rounded-lg w-96">

        <h2 className="text-white text-lg font-semibold mb-4">
          Create Task
        </h2>

        <form className="flex flex-col gap-4">

          <div>
            <label className="text-gray-400 text-sm">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full mt-1 p-2 bg-zinc-800 text-white rounded"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Description</label>
            <textarea
              placeholder="Detailed description of task"
              className="w-full mt-1 p-2 bg-zinc-800 text-white rounded"
            ></textarea>
          </div>

          <div>
            <label className="text-gray-400 text-sm">Date</label>
            <input
              type="date"
              className="w-full mt-1 p-2 bg-zinc-800 text-white rounded"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Assign To</label>
            <input
              type="text"
              className="w-full mt-1 p-2 bg-zinc-800 text-white rounded"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Category</label>
            <input
              type="text"
              placeholder="Design, Development etc"
              className="w-full mt-1 p-2 bg-zinc-800 text-white rounded"
            />
          </div>

          <button className="bg-black border border-gray-600 text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer">
            Create Task
          </button>

        </form>

      </div>

    </div></div>
  )
}

export default CreateTask