import React from "react";

interface CardReelsVideoProps {
    videoSrc: string;
}

export default function CardReelsVideo({ videoSrc }: CardReelsVideoProps) {
    return (


        <div className="w-full p-4 bg-white shadow-lg rounded-3xl mx-auto">
            <div className="relative w-full lg:h-[500px] md:h-[500px] sm:h-[500px] bg-gray-800 rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gray-600 rounded-full mt-3"></div>
                <video
                    src={videoSrc}
                    controls
                    className="w-full h-full max-h-[500px] object-cover"
                />
            </div>
        </div>

    );
}
