import amIMG from "../img/algorithmic.webp";
import pgIMG from "../img/password.webp";
import qrIMG from "../img/link-to-qr.webp";
import linkIMG from "../img/image-to-link.webp";
import cli from "../img/lym-cli.png";
import spaceVideo from "../img/space.mp4";
import { twMerge } from "tailwind-merge";

function Projects() {
  const ITEMS = [
    {
      id: 0,
      name: "algorithmic market",
      image: amIMG,
      link: "https://algorithmic-market.com/",
      description:
        "Aplicación web desarrollada en equipo, en la cual se venden cursos de trading para consumirlas dentro en la misma.",
      features:
        "alojamiento de videos en bunny, autenticación de usuarios con Auth0, compras integradas con Stripe.",
    },
    {
      id: 2,
      name: "lym CLI",
      image: cli,
      link: "https://lym.shuttleapp.rs/",
      description:
        "CLI desarrollada con Rust que simplifica labores de los programadores. Incluso la web está hecha con Rocket. ",
      features:
        "traduce texto instantáneamente, resuelve operaciones matemáticas, obtén la fecha y hora actual.",
    },
    {
      id: 3,
      name: "image to link",
      image: linkIMG,
      link: "https://image-to-link.netlify.app",
      description:
        "Convierte imágenes a enlaces fácilmente en segundos. Simple e intuitivo ¡Utilízalos donde quieras!",
      features:
        "implementación de Drag & Drop, generación de enlaces con Cloudinary, alertas con react-hot-toast.",
    },
    {
      id: 4,
      name: "link to QR",
      image: qrIMG,
      link: "https://linkto-qr.netlify.app",
      description:
        "Genera códigos QR personalizados, permite a los usuarios crearlos a partir de los enlaces que proporcionen.",
      features:
        "permite descargar el QR generado, QR único asociado para cada enlace, generación de QR con react-qr-code.",
    },
    {
      id: 5,
      name: "Password Generator",
      image: pgIMG,
      link: "https://passwords-create.netlify.app",
      visitGitHub: "https://github.com/gixilym/generator-passwords",
      description:
        "Refuerza tu seguridad en línea generando combinaciones de caracteres aleatorias para utilizar como contraseñas.",
      features:
        "longitud personalizable, capacidad de usar caracteres especiales, opción para copiar con un botón.",
    },
  ];

  return (
    <section
      id="projects"
      class="w-full h-full bg-[#0e6c6333] flex flex-col justify-start items-center gap-y-20 px-1 md:px-0"
    >
      <h2 class="pt-20 w-full text-center text-[#1df2dc] font-orbitron tracking-widest font-semibold text-4xl md:text-6xl">
        Proyectos
      </h2>
      <ul class="w-full md:w-[75%] grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 lg:gap-y-16">
        {ITEMS.map(project => (
          <li
            key={project.id}
            class="w-full max-w-[450px] h-auto  sm:h-[540px] bg-[#00000066] border border-slate-800 px-1 py-6 overflow-hidden rounded-2xl backdrop-blur-sm flex flex-col items-center justify-start gap-y-2 font-lato"
          >
            <img
              src={project.image}
              loading="lazy"
              alt="project image"
              class={twMerge(
                project.name == "lym CLI" ? "object-left" : "object-top",
                "object-cover aspect-[300/200] w-[90%] h-56 rounded-lg brightness-90"
              )}
              style={{ boxShadow: "0 0 4px #1df2dc" }}
            />
            <div class="p-4 flex flex-col justify-start items-start gap-y-4 md:gap-y-6">
              <div class="w-full flex justify-between gap-x-6 items-center">
                <h3 class="font-semibold text-lg md:text-xl capitalize text-[#1df2dc]">
                  {project.name}
                </h3>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-2 py-1 text-sm font-medium rounded-lg text-black bg-gray-200 hover:bg-white flex items-center justify-center gap-x-2"
                  href={project.link}
                >
                  <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 3.5H20.5M20.5 3.5V9M20.5 3.5L12.5 11.5"
                      stroke="#222222"
                      strokeWidth="2"
                    />
                    <path
                      d="M11.5 5.5H7.5C6.39543 5.5 5.5 6.39543 5.5 7.5V16.5C5.5 17.6046 6.39543 18.5 7.5 18.5H16.5C17.6046 18.5 18.5 17.6046 18.5 16.5V12.5"
                      stroke="#222222"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span class="pb-0.5 font-semibold text-md md:text-lg">
                    Visit
                  </span>
                </a>
              </div>

              <div class="flex flex-col justify-start items-start gap-y-2">
                <p class="text-md sm:text-lg text-gray-200 text-pretty">
                  {project.description}
                </p>
                <p class="text-md sm:text-lg text-gray-200 text-pretty">
                  <span class="text-[#1df2dc]">Características: </span>
                  {project.features}
                </p>
              </div>
            </div>
          </li>
        ))}
        <li class="hidden lg:flex w-full max-w-[450px] h-[540px] bg-[#00000066] border border-slate-800 overflow-hidden rounded-2xl backdrop-blur-sm flex-col items-center justify-start gap-y-5 font-lato">
          <p class="border-t-2 border-[#1df2dd4d] absolute z-10 bottom-0 left-0 text-md sm:text-lg text-white bg-gray-900 text-center p-2">
            Este proyecto está en construcción. Y para no romper la simetría,
            dejo un astronauta saludando
          </p>
          <video
            autoplay
            loop
            loading="lazy"
            class="w-full h-full object-cover object-top rounded-2xl opacity-95"
            src={spaceVideo}
          ></video>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
