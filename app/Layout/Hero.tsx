'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';



export default function Hero() {
    return (
        <section
            className="relative w-full h-screen flex items-center justify-center bg-foreground text-white rounded-md shadow-md mt-15 px-4 sm:px-5 md:px-12 lg:px-16">
            <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>
            <div className="relative text-center max-w-3xl p-6">
                <motion.div
                    className="md:w-40 md:h-40 sm:w-32 sm:h-32 shadow-md rounded-full border-4 border-white p-1 mx-auto mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src={"/images/FOTO.jpg"}
                        alt="Foto Portada"
                        width={150}
                        height={150}
                        priority
                        className="w-full h-full rounded-full "
                    />
                </motion.div>
                <motion.h1
                    className="font-bold tracking-tight leading-tight sm:text-4xl md:text-6xl text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Fernanda Siero
                </motion.h1>
                <motion.p
                    className="mt-4 text-3xl text-gray-300 text-secundary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Transformo tu visión en contenido que impacta
                </motion.p>
                <motion.div
                    className="mt-6 flex gap-4 justify-center md:flex-row sm:flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <a href='#sobremi'>
                        <button className="px-6 py-3 text-lg font-semibold bg-primary text-white rounded-full hover:bg-secundary transition-all">
                            SOBRE MI
                        </button>
                    </a>
                    <a href='#proyectos'>
                        <button className="px-6 py-3 text-lg font-semibold bg-primary text-white rounded-full hover:bg-secundary transition-all">
                            PROYECTOS
                        </button>
                    </a>
                    <a href='#contacto'>
                        <button className="px-6 py-3 text-lg font-semibold bg-primary text-white rounded-full hover:bg-secundary transition-all">
                            CONTACTO
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>


    );
}
