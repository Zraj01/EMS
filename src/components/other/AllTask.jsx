import React from 'react'

const AllTask = () => {
  return (
    <div className="bg-black p-8 min-h-screen">

      <div className="bg-zinc-900 rounded-lg p-6">

  
        <div className="grid grid-cols-3 text-white font-semibold border-b border-zinc-700 pb-3">
          <h2>Name</h2>
          <h2>Task</h2>
          <h2>Status</h2>
        </div>

       
        <div className="max-h-60 overflow-y-auto mt-3">

          <div className="grid grid-cols-3 text-gray-300 py-2 border-b border-zinc-800">
            <p>Sarthak</p>
            <p>Make a UI Design</p>
            <p className="text-yellow-400">Pending</p>
          </div>

          <div className="grid grid-cols-3 text-gray-300 py-2 border-b border-zinc-800">
            <p>Sarthak</p>
            <p>Make a UI Design</p>
            <p className="text-green-400">Completed</p>
          </div>

          <div className="grid grid-cols-3 text-gray-300 py-2 border-b border-zinc-800">
            <p>Sarthak</p>
            <p>Make a UI Design</p>
            <p className="text-red-400">Failed</p>
          </div>

          <div className="grid grid-cols-3 text-gray-300 py-2 border-b border-zinc-800">
            <p>Sarthak</p>
            <p>Make a UI Design</p>
            <p className="text-blue-400">Progress</p>
          </div>

          <div className="grid grid-cols-3 text-gray-300 py-2 border-b border-zinc-800">
            <p>Sarthak</p>
            <p>Make a UI Design</p>
            <p className="text-yellow-400">Pending</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AllTask