'use client';

import { motion } from 'framer-motion';
import CardReels from '../Components/Cards/CardReels';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



export default function ReelsProjects() {
    const reelIds = [
        { id: 1, idReels: "CqEbXNODIxY" },
        { id: 2, idReels: "CiThMMbDzgP" },
        { id: 3, idReels: "CjJcQasDyn1" },
        /*{ id: 4, idReels: "CufHwfpxd98"},
        { id: 5, idReels: "Cv5l7I6Nj6C"},
        { id: 6, idReels: "Cytdv92NN4k"},
        { id: 7, idReels: "C9itWxjtq5m"},
        { id: 8, idReels: "C7FmT0fPvjE"},
        { id: 9, idReels: "C35YIalrIXz"},*/
        { id: 10, idReels: "ClTucSBjmzq" },
        { id: 11, idReels: "Cnpq7FghA2x" },
        { id: 12, idReels: "CpTT7qgDISh" },
    ];

    return (
        <section className="w-full py-20">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center text-primary">Audiovisuales</h2>
                <p className="mt-1 mb-5 text-lg text-center text-gray-300 text-secundary">Café y agencia de envíos</p>
                <motion.div
                    className='p-5'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='relative'>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1.2}
                            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                            navigation={{
                                prevEl: '.swiper-button-prev-1',
                                nextEl: '.swiper-button-next-1'
                            }}
                            modules={[Navigation]}
                        >
                            {(reelIds).map((reels, index) => (
                                <SwiperSlide key={index}>
                                    <CardReels reelId={reels.idReels} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="absolute top-1/2 md:left-[-50px] sm:left-[-40px] transform -translate-y-1/2 z-10">
                            <div className="swiper-button-prev swiper-button-prev-1 rotate-0"></div>
                        </div>
                        <div className="absolute top-1/2 md:right-[-50px] sm:right-[-40px] transform -translate-y-1/2 z-10">
                            <div className="swiper-button-next swiper-button-next-1 rotate-0"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
