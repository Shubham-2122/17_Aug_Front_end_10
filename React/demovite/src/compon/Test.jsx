import React from 'react'

function Test() {
  return (
    <div>
        <div className="sm:flex">
            <div className="sm:w-1/2 sm:bg-amber-300 lg:bg-red-500 border-2">1</div>
            <div className="sm:w-1/2 border-2">2</div>
        </div>
    </div>
  )
}

export default Test