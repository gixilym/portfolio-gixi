import { RocketSVG } from "../svgs.jsx";
import Technologies from "./Technologies.jsx";

function Home() {
  return (
    <main class="flex flex-col flex-nowrap justify-between w-full min-h-screen font-orbitron">
      <header class="fixed flex justify-center items-center z-10 w-full">
        <nav class="flex flex-col sm:flex-row justify-start sm:justify-center items-center w-full sm:h-[40px] sm:gap-x-4 bg-[#0e6c6333] sm:bg-transparent">
          <a
            href="#aboutme"
            class="text-md sm:text-xl sm:rounded-bl-2xl sm:rounded-br-2xl px-2 sm:px-5 py-3 sm:border-2 border-[#17c3b2] border-t-0 text-center uppercase backdrop-blur-md duration-100 text-[#17c3b2] font-bold tracking-wider sm:tracking-widest cursor-pointer hover:bg-[rgb(23,195,178)] hover:text-black"
          >
            Sobre&nbsp;mí
          </a>
          <a
            href="#projects"
            class="text-md sm:text-xl sm:rounded-bl-2xl sm:rounded-br-2xl px-2 sm:px-5 py-3 sm:border-2 border-[#17c3b2] border-t-0 text-center uppercase backdrop-blur-md duration-100 text-[#17c3b2] font-bold tracking-wider sm:tracking-widest cursor-pointer hover:bg-[rgb(23,195,178)] hover:text-black"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            class="text-md sm:text-xl sm:rounded-bl-2xl sm:rounded-br-2xl px-2 sm:px-5 py-3 sm:border-2 border-[#17c3b2] border-t-0 text-center uppercase backdrop-blur-md duration-100 text-[#17c3b2] font-bold tracking-wider sm:tracking-widest cursor-pointer hover:bg-[rgb(23,195,178)] hover:text-black"
          >
            Contacto
          </a>
        </nav>
      </header>

      <p class="Estoy para que no se rompa el estilo" />

      <div class="overflow-hidden flex flex-col items-center justify-evenly w-full h-[45vh] min-h-[400px] mt-6">
        <div
          style={{ textShadow: "0 0em 2em #1df2dc" }}
          class="w-full md:w-[500px] px-4 sm:px-0 tracking-widest text-[#1df2dc] font-bold flex flex-col items-center justify-center gap-y-6"
        >
          <p class="text-3xl sm:text-4xl capitalize text-center sm:text-start w-full ">
            Gixi
          </p>
          <h1 class="text-4xl sm:text-7xl capitalize text-center w-full ">
            Frontend
          </h1>
          <p class="text-3xl sm:text-4xl capitalize text-center sm:text-end w-full ">
            Dev
          </p>
        </div>
        <Technologies />
      </div>

      <RocketSVG />

      <footer class="bg-[#0e6c6333] w-full flex justify-center items-center py-4">
        <p class="text-[#1df2dc] tracking-wider text-lg sm:text-2xl">
          Estado&nbsp;
        </p>
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          fill="none"
          alt="circulo"
        >
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            fill="#4acb4a"
          />
        </svg>
        <p class="text-[#4acb4a] tracking-wider text-lg sm:text-2xl">
          &nbsp;
          {Math.round(Math.random() * 10) < 5 ? "Activo" : "Programando"}
        </p>
      </footer>
    </main>
  );
}

export default Home;
