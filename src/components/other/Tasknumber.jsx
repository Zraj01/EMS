import React from 'react'

const Tasknumber = (props) => {
  return (
   <>
    <div className="flex gap-6 p-6 bg-black min-h-50vh">

      <div className="bg-red-400 text-white p-6 rounded-xl w-60">
        <h1 className="text-3xl font-bold">{props.data.taskCount.newTask}</h1>
        <p className="text-lg">New Task</p>
      </div>

      <div className="bg-blue-400 text-white p-6 rounded-xl w-60">
        <h1 className="text-3xl font-bold">{props.data.taskCount.active}</h1>
        <p className="text-lg">In Progress</p>
      </div>

      <div className="bg-green-400 text-white p-6 rounded-xl w-60">
        <h1 className="text-3xl font-bold">{props.data.taskCount.completed}</h1>
        <p className="text-lg">Completed</p>
      </div>

      <div className="bg-yellow-400 text-white p-6 rounded-xl w-60">
        <h1 className="text-3xl font-bold">{props.data.taskCount.failed}</h1>
        <p className="text-lg">Failed</p>
      </div>

    </div>
   </>
  )
}

export default Tasknumber