'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const brands = [
    { name: 'Marca 1', logo: '/images/logos/logoambar.jpg' },
    { name: 'Marca 2', logo: '/images/logos/logobdf.jpg' },
    { name: 'Marca 3', logo: '/images/logos/logopuma.jpg' },
    { name: 'Marca 4', logo: '/images/logos/optima2.jpg' },
];

export default function BrandsSection() {
    return (
        <section className="w-full py-16 bg-foreground rounded-md shadow-md">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Atención al cliente
                </motion.h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 3 },
                        768: { slidesPerView: 3, spaceBetween: 5 },
                        1024: { slidesPerView: 4, spaceBetween: 10 },
                        1280: { slidesPerView: 4, spaceBetween: 10 },
                    }}
                    loop={brands.length > 4}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="w-full max-w-5xl"
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <motion.div
                                className="w-32 sm:w-36 md:w-40 lg:w-44 h-32 sm:h-36 md:h-40 lg:h-44 rounded-full border-4 border-white p-1"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={250}
                                    height={250}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
