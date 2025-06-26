import React from 'react'
import { Link } from 'react-router-dom';
import Time from '../loader/Time';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';

function SuggestedVideo({ video }) {
    console.log(video);
    
return (
    <div className="w-full py-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
        <Link to={`/video/${video?.videoId}`} className="flex">
            {/* Thumbnail */}
            <div className="relative h-28 w-48 min-w-[192px] rounded-lg overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    src={video?.thumbnails[0]?.url}
                    alt={video?.title}
                />
                {video?.lengthSeconds && (
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm py-0.5 rounded">
                        <Time time={video?.lengthSeconds} />
                    </div>
                )}
            </div>
            {/* Info */}
            <div className="flex flex-col ml-4 justify-between flex-1 overflow-hidden">
                <span className="text-sm font-semibold line-clamp-2 text-gray-900">
                    {video?.title}
                </span>
                <span className="text-sm font-medium mt-1 flex items-center text-gray-700">
                    {video?.author?.title}
                    {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-gray-500 ml-1 text-xs" />
                    )}
                </span>
                <div className="flex flex-col text-xs font-semibold text-gray-600 ">
                    <span>
                        {abbreviateNumber(video?.stats?.views, 2)} views
                    </span>
                    <span className="truncate">{video?.publishedTimeText}</span>
                </div>
            </div>
        </Link>
    </div>
);
}

export default SuggestedVideo

