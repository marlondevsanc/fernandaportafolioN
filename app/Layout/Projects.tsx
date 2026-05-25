'use client';

import { motion } from 'framer-motion';
import CardProjects from '../Components/Cards/CardProjects';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import CardReelsVideo from '../Components/Cards/CardReelsVideo';
import CardReels from '../Components/Cards/CardReels';

interface IProject {
    title: string;
    description: string;
    image: string;
    link: string;
}

const projects: Record<string, IProject[]> = {
    castillo: [
        { title: 'Aceitera El Real', description: 'Creatividad y copys', image: '/images/cppost1.jpg', link: 'https://www.facebook.com/share/p/1ACZprhCve/' },
        { title: 'Aceitera El Real', description: 'Creatividad y copys', image: '/images/cppost2.jpg', link: 'https://www.facebook.com/share/p/1BVkr7FqMv/' },
        { title: 'Aceitera El Real', description: 'Creatividad y copys', image: '/images/cppost3.jpg', link: 'https://www.facebook.com/share/p/18JeogLeHx/' },
        { title: 'Aceitera El Real', description: 'Creatividad y copys', image: '/images/cppost4.jpg', link: 'https://www.facebook.com/share/p/1BMPMccTao/' },
        { title: 'Aceitera El Real', description: 'Creatividad y copys', image: '/images/cppost5.jpg', link: 'https://www.facebook.com/share/v/15ehBrrsVj/' },
        { title: 'Cerveza Corona', description: 'Creatividad y copys', image: '/images/cppost6.jpg', link: 'https://www.facebook.com/share/p/19bseKFJ4M/' },
        { title: 'Cerveza Corona', description: 'Creatividad y copys', image: '/images/cppost7.jpg', link: 'https://www.facebook.com/share/p/12HZJmMNnRf/' },
        { title: 'Cerveza Corona', description: 'Creatividad y copys', image: '/images/cppost8.jpg', link: 'https://www.facebook.com/share/p/1B2WJ183fw/' },
        { title: 'Cerveza Corona', description: 'Creatividad y copys', image: '/images/cppost9.jpg', link: 'https://www.facebook.com/share/p/15cusbGPpu/' },
        { title: 'Cerveza Corona', description: 'Creatividad y copys', image: '/images/cppost10.jpg', link: 'https://www.facebook.com/share/p/12Kinid27by/' },
        { title: 'Cerveza Corona', description: 'Creatividad y copys', image: '/images/cppost11.jpg', link: 'https://www.facebook.com/share/p/15yLiZwPg7/' },
    ],
    ogilvy: [
        { title: 'Burger King', description: 'Creatividad y copys', image: '/images/opost1.jpg', link: 'https://www.facebook.com/BurgerKingNI/photos/605379154304184' },
        { title: 'Burger King', description: 'Creatividad y copys', image: '/images/opost2.jpg', link: 'https://www.facebook.com/BurgerKingNI/photos/620314309477335' },
        { title: 'Burger King', description: 'Creatividad y copys', image: '/images/opost3.jpg', link: 'https://www.facebook.com/BurgerKingNI/photos/623024689206297' },
        { title: 'Burger King', description: 'Creatividad y copys', image: '/images/opost4.jpg', link: 'https://www.facebook.com/BurgerKingNI/photos/629606571881442' },
        { title: 'Burger King', description: 'Creatividad y copys', image: '/images/opost5.jpg', link: 'https://www.facebook.com/BurgerKingNI/photos/639359324239500' },
        { title: 'Burger King', description: 'Creatividad y copys', image: '/images/opost6.jpg', link: 'https://www.facebook.com/BurgerKingNI/photos/675260817316017' },
        { title: 'Miller Lite', description: 'Creatividad y copys', image: '/images/opost7.jpg', link: 'https://www.facebook.com/photo.php?fbid=639019548242072&set=pb.100064020976206.-2207520000.&type=3' },
        { title: 'Miller Lite', description: 'Creatividad y copys', image: '/images/opost8.jpg', link: 'https://www.facebook.com/photo.php?fbid=649686820508678&set=pb.100064020976206.-2207520000.&type=3' },
        { title: 'Miller Lite', description: 'Creatividad y copys', image: '/images/opost9.jpg', link: 'https://www.facebook.com/millerlitenicaragua/videos/600581478672067' },
        { title: 'Miller Lite', description: 'Creatividad y copys', image: '/images/opost10.jpg', link: 'https://www.facebook.com/photo.php?fbid=630791242398236&set=pb.100064020976206.-2207520000.&type=3' },
        { title: 'Miller Lite', description: 'Creatividad y copys', image: '/images/opost11.jpg', link: 'https://www.facebook.com/photo.php?fbid=638881838255843&set=pb.100064020976206.-2207520000.&type=3' },
        { title: 'Miller Lite', description: 'Creatividad y copys', image: '/images/opost12.jpg', link: 'https://www.facebook.com/millerlitenicaragua/videos/553139203474229' },
        { title: 'Banco Ficosa', description: 'Creatividad y copys', image: '/images/opost13.jpg', link: 'https://www.facebook.com/bancoficohsanicaragua/photos/5416316245163303' },
        { title: 'Banco Ficosa', description: 'Creatividad y copys', image: '/images/opost14.jpg', link: 'https://www.facebook.com/bancoficohsanicaragua/photos/5432533483541579' },
        { title: 'Banco Ficosa', description: 'Creatividad y copys', image: '/images/opost15.jpg', link: 'https://www.facebook.com/bancoficohsanicaragua/photos/5460324747429119' },
        { title: 'Banco Ficosa', description: 'Creatividad y copys', image: '/images/opost16.jpg', link: 'https://www.facebook.com/bancoficohsanicaragua/photos/5435034953291432' },
        { title: 'Banco Ficosa', description: 'Creatividad y copys', image: '/images/opost17.jpg', link: 'https://www.facebook.com/bancoficohsanicaragua/photos/5463178240477103' },
        { title: 'Banco Ficosa', description: 'Creatividad y copys', image: '/images/opost18.jpg', link: 'https://www.facebook.com/bancoficohsanicaragua/photos/5587324161395843' },
        { title: 'Tizate Costa Rica', description: 'Creatividad y copys', image: '/images/opost19.jpg', link: 'https://www.facebook.com/103558299169023/photos/pb.100085375909439.-2207520000./113016174889902/?type=3' },
        { title: 'Tizate Costa Rica', description: 'Creatividad y copys', image: '/images/opost20.jpg', link: 'https://www.facebook.com/photo.php?fbid=126837983505398&set=pb.100085375909439.-2207520000.&type=3' },
        { title: 'Tizate Costa Rica', description: 'Creatividad y copys', image: '/images/opost21.jpg', link: 'https://www.facebook.com/photo.php?fbid=127164620139401&set=pb.100085375909439.-2207520000.&type=3' },
        { title: 'Tizate Costa Rica', description: 'Creatividad y copys', image: '/images/opost22.jpg', link: 'https://www.facebook.com/photo.php?fbid=147759711413225&set=pb.100085375909439.-2207520000.&type=3' },
        { title: 'Tizate Costa Rica', description: 'Creatividad y copys', image: '/images/opost23.jpg', link: 'https://www.facebook.com/photo.php?fbid=141937261995470&set=pb.100085375909439.-2207520000.&type=3' },
        { title: 'Tizate Costa Rica', description: 'Creatividad y copys', image: '/images/opost24.jpg', link: 'https://www.facebook.com/photo.php?fbid=133403546182175&set=pb.100085375909439.-2207520000.&type=3' },
        { title: 'Casa del Café', description: 'Creatividad y copys', image: '/images/opost25.jpg', link: 'https://www.facebook.com/CasadelCafeNi/photos/pb.100064875150610.-2207520000./8928611480512815/?type=3' },
        { title: 'Casa del Café', description: 'Creatividad y copys', image: '/images/opost26.jpg', link: 'https://www.facebook.com/CasadelCafeNi/photos/pb.100064875150610.-2207520000./8984616274912335/?type=3' },
        { title: 'Casa del Café', description: 'Creatividad y copys', image: '/images/opost27.jpg', link: 'https://www.facebook.com/CasadelCafeNi/photos/pb.100064875150610.-2207520000./9000868699953759/?type=3' },
        { title: 'Casa del Café', description: 'Creatividad y copys', image: '/images/opost28.jpg', link: 'https://www.facebook.com/CasadelCafeNi/photos/pb.100064875150610.-2207520000./9001256239915005/?type=3' },
        { title: 'Casa del Café', description: 'Creatividad y copys', image: '/images/opost29.jpg', link: 'https://www.facebook.com/CasadelCafeNi/photos/pb.100064875150610.-2207520000./9078738645500097/?type=3' },
        { title: 'Casa del Café', description: 'Creatividad y copys', image: '/images/opost30.jpg', link: 'https://www.facebook.com/photo.php?fbid=626582966180870&set=pb.100064875150610.-2207520000.&type=3' },
        { title: 'Hyundai', description: 'Creatividad y copys', image: '/images/opost31.jpg', link: 'https://www.facebook.com/HyundaiNicaragua/photos/pb.100064838344964.-2207520000./5739623529437286/?type=3' },
        { title: 'Hyundai', description: 'Creatividad y copys', image: '/images/opost32.jpg', link: 'https://www.facebook.com/HyundaiNicaragua/photos/pb.100064838344964.-2207520000./5534952329904408/?type=3' },
        { title: 'Hyundai', description: 'Creatividad y copys', image: '/images/opost33.jpg', link: 'https://www.facebook.com/HyundaiNicaragua/photos/pb.100064838344964.-2207520000./5437371736329135/?type=3' },
        { title: 'Hyundai', description: 'Creatividad y copys', image: '/images/opost34.jpg', link: 'https://www.facebook.com/HyundaiNicaragua/photos/pb.100064838344964.-2207520000./5534957633237211/?type=3' },
        { title: 'Hyundai', description: 'Creatividad y copys', image: '/images/opost35.jpg', link: 'https://www.facebook.com/photo.php?fbid=590545533116720&set=pb.100064838344964.-2207520000.&type=3' },
        { title: 'Hyundai', description: 'Creatividad y copys', image: '/images/opost36.jpg', link: 'https://www.facebook.com/photo.php?fbid=590546099783330&set=pb.100064838344964.-2207520000.&type=3' },
        { title: 'Mazda', description: 'Creatividad y copys', image: '/images/opost37.jpg', link: 'https://www.facebook.com/MazdaNicaragua/photos/pb.100064623945086.-2207520000./6051486648222577/?type=3' },
        { title: 'Mazda', description: 'Creatividad y copys', image: '/images/opost38.jpg', link: 'https://www.facebook.com/photo.php?fbid=582561907241269&set=pb.100064623945086.-2207520000.&type=3' },
        { title: 'Mazda', description: 'Creatividad y copys', image: '/images/opost39.jpg', link: 'https://www.facebook.com/photo.php?fbid=582562123907914&set=pb.100064623945086.-2207520000.&type=3' },
        { title: 'Ford', description: 'Creatividad y copys', image: '/images/opost40.jpg', link: 'https://www.facebook.com/photo.php?fbid=560667352767864&set=pb.100064738114531.-2207520000.&type=3' },
        { title: 'Ford', description: 'Creatividad y copys', image: '/images/opost41.jpg', link: 'https://www.facebook.com/photo.php?fbid=589127953255137&set=pb.100064738114531.-2207520000.&type=3' },
        { title: 'Ford', description: 'Creatividad y copys', image: '/images/opost42.jpg', link: 'https://www.facebook.com/photo/?fbid=594390716062194&set=pb.100064738114531.-2207520000.' },
        { title: 'Atlantic logistics', description: 'Creatividad y copys', image: '/images/opost43.jpg', link: 'https://www.facebook.com/103050762370448/photos/pb.100083190519423.-2207520000./177066838302173/?type=3' },
        { title: 'Atlantic logistics', description: 'Creatividad y copys', image: '/images/opost44.jpg', link: 'https://www.facebook.com/photo.php?fbid=168810582568625&set=pb.100083190519423.-2207520000.&type=3' },
        { title: 'Atlantic logistics', description: 'Creatividad y copys', image: '/images/opost45.jpg', link: 'https://www.facebook.com/photo.php?fbid=174061148710235&set=pb.100083190519423.-2207520000.&type=3' },




    ],
    puntada: [
        { title: 'Puntada Gráfica', description: 'Creatividad', image: '/images/pgpost1.jpg', link: 'https://www.facebook.com/puntadagrafica/photos/2240509409432300' },
        { title: 'Puntada Gráfica', description: 'Creatividad', image: '/images/pgpost2.jpg', link: 'https://www.facebook.com/puntadagrafica/photos/2214585242024717' },
        { title: 'Puntada Gráfica', description: 'Creatividad', image: '/images/pgpost3.jpg', link: 'https://www.facebook.com/puntadagrafica/photos/2211591285657446' },
        { title: 'Puntada Gráfica', description: 'Creatividad', image: '/images/pgpost4.jpg', link: 'https://www.facebook.com/puntadagrafica/photos/2218116055004969' },
        //{ title: 'Puntada Gráfica', description: 'Creatividad', image: '/images/pgpost5.jpg', link: 'https://www.facebook.com/puntadagrafica/photos/2262703437212897' },
        { title: 'Puntada Gráfica', description: 'Creatividad', image: '/images/pgpost6.jpg', link: 'https://www.facebook.com/puntadagrafica/photos/2243618632454711' },

    ]
};

const sinfoniadigital: IProject[] = [
    { title: 'Clínica Soludental', description: 'Creacion de contenido', image: '/images/BIT -Soludental- Mayo 2026 (8).jpeg', link: '#' },
   { title: 'Clínica Soludental', description: 'Creacion de contenido', image: '/images/Bitácora Soludental- NOV.jpeg', link: '#' },
    { title: 'Santuario Natural', description: 'Creacion de contenido', image: '/images/Bitácora SN - Nov (1).jpeg', link: '#' },
    { title: 'Santuario Natural', description: 'Creacion de contenido', image: '/images/Bitácora SN - Nov.jpeg', link: '#' },
    { title: 'Dra. María Reyes', description: 'Creacion de contenido', image: '/images/Post 5.jpg.jpeg', link: '#' },
    { title: 'Dra. María Reyes', description: 'Creacion de contenido', image: '/images/Post 6.jpg.jpeg', link: '#' },
    { title: 'Dra. María Reyes', description: 'Creacion de contenido', image: '/images/Post 9.jpg.jpeg', link: '#' },
    { title: 'Restaurante Fireplace', description: 'Creacion de contenido', image: '/images/Post Fireplace- Agosto (19).jpeg', link: '#' },
    { title: 'Restaurante Fireplace', description: 'Creacion de contenido', image: '/images/Post Fireplace- Agosto (20).jpeg', link: '#' },
    { title: 'Burger King', description: 'Creacion de contenido', image: '/images/Post1-Burger King.jpg', link: '#' },
];

const reelsData = [
    {
        videoSrc: "/videos/reel1.mp4",
    },
    {
        videoSrc: "/videos/reel2.mp4",
    },
    {
        videoSrc: "/videos/reel3.mp4",
    },
    {
        videoSrc: "/videos/reel4.mp4",
    },
    {
        videoSrc: "/videos/reel5.mp4",
    },
    {
        videoSrc: "/videos/reel6.mp4",
    },
];

const instagramReels = [
    { id: 10, idReels: "ClTucSBjmzq" },
    { id: 11, idReels: "Cnpq7FghA2x" },
    { id: 12, idReels: "CpTT7qgDISh" },
];


export default function Projects() {
    const coronaProjects = projects.castillo.filter((project) => project.title === 'Cerveza Corona');
    const aceiteraProjects = projects.castillo.filter((project) => project.title === 'Aceitera El Real');
    const remainingCastilloProjects = projects.castillo.filter(
        (project) => project.title !== 'Cerveza Corona' && project.title !== 'Aceitera El Real'
    );

    const contentProjects = [
        ...coronaProjects,
        ...aceiteraProjects,
        ...remainingCastilloProjects,
        ...projects.ogilvy,
        ...sinfoniadigital,
        ...projects.puntada,
    ];

    return (
        <section id='proyectos' className="w-full py-20 bg-foreground shadow-md rounded-md text-black">
            <div className="container mx-auto max-w-6xl px-6">
                <h2 className="text-4xl font-bold text-center mb-8 text-primary">Creación de contenido</h2>

                <div className="flex flex-col justify-center gap-20">
                    <motion.div
                        className="p-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1.2}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 }
                                }}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next'
                                }}
                                modules={[Navigation]}
                            >
                                {contentProjects.map((project, index) => (
                                    <SwiperSlide key={index}>
                                        <CardProjects
                                            title={project.title}
                                            description={project.description}
                                            image={project.image}
                                            link={project.link}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Botones de navegación del primer Swiper */}
                            <div className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 z-10">
                                <div className="swiper-button-prev swiper-button-prev rotate-0"></div>
                            </div>
                            <div className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 z-10">
                                <div className="swiper-button-next swiper-button-next rotate-0"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Segundo Swiper */}
                    <div className='flex flex-col justify-center gap-10'>
                        <div className='flex flex-col justify-center gap-1'>
                            <h2 className="text-4xl font-bold text-center text-primary">Audiovisuales</h2>
                            <p className="text-lg text-gray-300 text-center text-secundary">Reels para marcas de cerveza</p>
                        </div>
                        <div className="w-full flex justify-center items-center relative mt-0">

                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1.2}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 }
                                }}
                                navigation={{
                                    prevEl: '.swiper-button-prev-2', // Cambié las clases a swiper-button-prev-2 y swiper-button-next-2
                                    nextEl: '.swiper-button-next-2'
                                }}
                                modules={[Navigation]}
                            >
                                {reelsData.map((reel, index) => (
                                    <SwiperSlide key={`video-${index}`} className="flex justify-center items-center">
                                        <CardReelsVideo {...reel} />
                                    </SwiperSlide>
                                ))}
                                {instagramReels.map((reel) => (
                                    <SwiperSlide key={`reel-${reel.id}`} className="flex justify-center items-center">
                                        <CardReels reelId={reel.idReels} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Botones de navegación del segundo Swiper */}
                            <div className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 z-10">
                                <div className="swiper-button-prev swiper-button-prev-2 rotate-0"></div>
                            </div>
                            <div className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 z-10">
                                <div className="swiper-button-next swiper-button-next-2 rotate-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
