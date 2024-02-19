import Technologies from "./Technologies.jsx";

function Home() {
  return (
    <main class="flex flex-col flex-nowrap justify-between w-full min-h-screen font-orbitron">
      <header class="fixed flex justify-center items-center z-10 w-full">
        <nav class="flex flex-row justify-center items-center w-full h-[45px] gap-x-2 sm:gap-x-6">
          <a
            href="#aboutme"
            class="text-sm sm:text-lg rounded-bl-2xl rounded-br-2xl px-2 sm:px-8 py-4 border-2 border-[#17c3b2] border-t-0 text-center uppercase backdrop-blur-md duration-100 text-[#17c3b2] font-bold tracking-wider sm:tracking-widest cursor-pointer hover:bg-[rgb(23,195,178)] hover:text-black"
          >
            Sobre&nbsp;mí
          </a>
          <a
            href="#projects"
            class="text-sm sm:text-lg rounded-bl-2xl rounded-br-2xl px-2 sm:px-8 py-4 border-2 border-[#17c3b2] border-bl-2 border-br-2 border-t-0 bg-transparent text-center uppercase backdrop-blur-md duration-75 text-[#17c3b2] font-bold tracking-wider sm:tracking-widest cursor-pointer hover:bg-[rgb(23,195,178)] hover:text-black"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            class="text-sm sm:text-lg rounded-bl-2xl rounded-br-2xl px-2 sm:px-8 py-4 border-2 border-[#17c3b2] border-bl-2 border-br-2 border-t-0 bg-transparent text-center uppercase backdrop-blur-md duration-75 text-[#17c3b2] font-bold tracking-wider sm:tracking-widest cursor-pointer hover:bg-[rgb(23,195,178)] hover:text-black"
          >
            Contacto
          </a>
        </nav>
      </header>

      <p class="Estoy para que no se rompa el estilo" />

      <div class="overflow-hidden flex flex-col items-center justify-evenly w-full h-[45vh] min-h-[400px] mt-6">
        <div
          style={{ textShadow: "0 0em 2em #1df2dc" }}
          class="w-full sm:w-[600px] px-4 sm:px-0 tracking-widest text-[#1df2dc] font-bold text-center flex flex-col items-end justify-center"
        >
          <p class="text-xl sm:text-3xl capitalize text-start w-full mr-2">
            Desarrollador
          </p>
          <br />
          <h1 class="text-5xl sm:text-7xl capitalize text-center w-full">
            Frontend
          </h1>
          <br />
          <p class="text-xl sm:text-4xl capitalize text-end w-full sm:mr-10">
            Gixi
          </p>
        </div>

        <Technologies />
      </div>

      <footer class="bg-[#17c3b233] w-full flex justify-center items-center py-4">
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
