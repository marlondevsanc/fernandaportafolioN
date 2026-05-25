'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id='sobremi' className="w-full py-20 text-black flex items-center justify-center">
            <div className="container mx-auto flex flex-col gap-10 md:flex-row items-center max-w-6xl px-6">
                <motion.div
                    className="w-full md:w-1/2 mb-6 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src={"/images/FOTO.jpg"}
                        width={400}
                        height={400}
                        alt="Sobre mí"
                        className="rounded-lg shadow-lg w-full h-auto object-cover shadow-md"
                    />
                </motion.div>
                <motion.div
                    className="w-full md:w-1/2 text-left gap-3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <h2 className="text-4xl font-bold mb-4 text-primary">Sobre mi</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Soy apacionada del contenido y estrategia digital. Con más de 3 años de experiencia, he ayudado a marcas a contar su historia de manera efectiva.
                        Este portafolio representa solo una muestra de lo que he logrado a lo largo de mi carrera profesional. ¡Estoy lista para dar vida a tus ideas!
                    </p>
                    <a href="https://wa.link/ei3hmp">
                        <button className="px-6 py-3 mt-4 text-lg font-semibold bg-primary text-white rounded-full hover:bg-secundary transition-all shadow-sm">
                            Conversemos
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
