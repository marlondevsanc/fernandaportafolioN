import React from 'react';

type CardReelsProps = {
    reelId: string;
};

const CardReels = ({ reelId }: CardReelsProps) => {
    const reelUrl = `https://www.instagram.com/reel/${reelId}/embed`;

    return (
        <div className="w-full p-4 bg-white shadow-lg rounded-3xl mx-auto">
            <div className="relative w-full lg:h-[650px] md:h-[600px] sm:h-[500px] bg-gray-800 rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gray-600 rounded-full mt-3"></div>
                <iframe
                    src={reelUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen={true}
                    className="rounded-3xl mt-10"
                ></iframe>
            </div>
        </div>
    );
};

export default CardReels;
