import React from 'react'

const Header = (props) => {
  return (
    <div className="flex items-center justify-between bg-black text-white px-10 py-4">

      <h1 className="text-2xl font-semibold">
        HELLO {props.name}
      </h1>

      <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer">
        Logout
      </button>

    </div>
  )
}

export default Header