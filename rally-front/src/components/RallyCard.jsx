import React, { useContext } from 'react'
import { PhotoContext } from '../context/photo.context'

function RallyCard() {
  const {rally} = useContext(PhotoContext);
  return (
    <div className="">
      <h1 className="title"></h1>
    </div>
  )
}

export default RallyCard