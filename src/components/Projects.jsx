import amIMG from "../img/algorithmic.webp";
import pgIMG from "../img/password.webp";
import qrIMG from "../img/link-to-qr.webp";
import linkIMG from "../img/image-to-link.webp";

function Projects() {
  const ITEMS = [
    {
      id: 0,
      name: "algorithmic market",
      image: amIMG,
      link: "https://algorithmic-market.com/",
      content: {
        description:
          "Aplicación web desarrollada en equipo, en la cual se venden cursos de trading para consumirlas dentro en la misma.",
        itemOne: "Alojamiento de videos en bunny.",
        itemTwo: "Autenticación de usuarios con Auth0.",
        itemThree: "Compras integradas con Stripe.",
      },
    },
    {
      id: 1,
      name: "image to link",
      image: linkIMG,
      link: "https://image-to-link.netlify.app",
      content: {
        description:
          "Convierte imágenes a enlaces fácilmente en segundos. Simple e intuitivo ¡Utilízalos donde quieras!",
        itemOne: "Implementación de Drag & Drop.",
        itemTwo: "Generación de enlaces con Cloudinary.",
        itemThree: "Alertas con react-hot-toast.",
      },
    },
    {
      id: 2,
      name: "link to QR",
      image: qrIMG,
      link: "https://linkto-qr.netlify.app",
      content: {
        description:
          "Genera códigos QR personalizados, permite a los usuarios crearlos a partir de los enlaces que proporcionen.",
        itemOne: "Permite descargar el QR generado.",
        itemTwo: "QR único asociado para cada enlace.",
        itemThree: "Generación de QR con react-qr-code.",
      },
    },

    {
      id: 4,
      name: "Password Generator",
      image: pgIMG,
      link: "https://passwords-create.netlify.app",
      visitGitHub: "https://github.com/gixilym/generator-passwords",
      content: {
        description:
          "Aprendí a manipular y generar cadenas de caracteres de forma aleatoria.",
        itemOne: "Longitud personalizable.",
        itemTwo: "Capacidad de agregar caracteres especiales.",
        itemThree: "Opción para copiar con un botón.",
      },
    },
  ];

  return (
    <section
      id="projects"
      class="w-full h-full bg-[#0e6c6333] flex flex-col justify-start items-center gap-y-20"
    >
      <h2 class="pt-20 w-full text-center text-[#1df2dc] font-orbitron tracking-widest font-semibold text-4xl md:text-5xl">
        Proyectos
      </h2>
      <ul class="w-full lg:w-[65%] grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 lg:gap-y-16">
        {ITEMS.map(project => (
          <li
            key={project.id}
            class="w-full max-w-[400px] h-[450px] bg-[#00000066] border border-slate-800 px-1 py-3 overflow-hidden rounded-2xl backdrop-blur-sm flex flex-col items-center justify-between font-lato"
          >
            <img
              src={project.image}
              loading="lazy"
              alt="project image"
              class="object-cover object-top aspect-[300/200] w-[90%] h-48 rounded-lg brightness-90"
              style={{ boxShadow: "0 0 4px #1df2dc" }}
            />
            <div class="p-4 flex flex-col justify-start items-start gap-y-4">
              <div class="w-full flex justify-start gap-x-6 items-center">
                <h3 class="font-semibold text-lg md:text-xl capitalize text-[#1df2dc]">
                  {project.name}
                </h3>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 text-sm font-medium rounded-lg text-black bg-gray-200 hover:bg-white flex items-center justify-center gap-x-2"
                  href={project.link}
                >
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 3.5H20.5M20.5 3.5V9M20.5 3.5L12.5 11.5"
                      stroke="#222222"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M11.5 5.5H7.5C6.39543 5.5 5.5 6.39543 5.5 7.5V16.5C5.5 17.6046 6.39543 18.5 7.5 18.5H16.5C17.6046 18.5 18.5 17.6046 18.5 16.5V12.5"
                      stroke="#222222"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span class="pb-0.5 font-semibold">Visit</span>
                </a>
              </div>

              <div>
                <p class="text-md text-gray-200 mb-2 text-pretty">
                  {project.content.description}
                </p>
                <p class="text-md  text-gray-200 ">
                  <span class="text-[#1df2dc]">&nbsp;&nbsp;&gt;</span>
                  &nbsp;&nbsp;
                  {project.content.itemOne}
                </p>
                <p class="text-md  text-gray-200 ">
                  <span class="text-[#1df2dc]">&nbsp;&nbsp;&gt;</span>
                  &nbsp;&nbsp;
                  {project.content.itemTwo}
                </p>
                <p class="text-md  text-gray-200 ">
                  <span class="text-[#1df2dc]">&nbsp;&nbsp;&gt;</span>
                  &nbsp;&nbsp;
                  {project.content.itemThree}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
