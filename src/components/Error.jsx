import React from 'react'

function Error({msj}) {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
        <p> {msj} </p>
    </div>
  )
}

export default Error
