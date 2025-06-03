import React from 'react'
import moment from 'moment/moment'
function Time({time}) {
    const videoTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  return (
    <div>
    <span className='absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-xs'>
     {videoTime}
    </span>
    </div>
  )
}

export default Time
