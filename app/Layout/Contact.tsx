"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section id="contacto" className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-12">
      <div className="md:w-1/2 flex justify-center">
        <Image src="/images/FOTO.jpg" alt="Contact" width={400} height={400} className="rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <motion.h2
          className="text-4xl font-bold mb-4 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contactáme
        </motion.h2>
        <motion.p
          className="text-lg text-secundary mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          ¡Hagamos algo increíble juntos! Si estás listo para transformar tu contenido
          y destacar en el mundo digital, contactáme. Estoy emocionada por escuchar tus ideas y colaborar con vos
        </motion.p>
        <div className="flex justify-center md:justify-start space-x-6">
          {/*<motion.a
            href="https://www.linkedin.com/in/fernanda-siero-bab614248/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-primary hover:text-blue-500 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a> */}
          <motion.a
            href="https://wa.link/ei3hmp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-primary hover:text-green-500 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            href="mailto:sierofernanda@gmail.com"
            className="text-4xl text-primary hover:text-red-500 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
