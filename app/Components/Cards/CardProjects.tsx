import Image from "next/image";

interface CardProjectsProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function CardProjects({
  title,
  description,
  image,
  link,
}: CardProjectsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Imagen responsiva */}
      <div className="relative w-full h-56 sm:h-64 md:h-72">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 sm:p-6">
        <h3 className="text-2xl sm:text-xl font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-lg text-secundary">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-primary font-medium hover:underline bg-foreground rounded-md shadow-sm p-2"
        >
          Ver post →
        </a>
      </div>
    </div>
  );
}
