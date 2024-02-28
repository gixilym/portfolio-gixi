function AboutMe() {
  const T = ({ children }) => (
    <span class="text-[#1df2dc] font-lato font-semibold">{children}</span>
  );

  return (
    <section
      class="pt-20 bg-[#0e6c6333] min-h-[80vh] flex flex-col items-center justify-center overflow-x-hidden gap-x-3 gap-y-12"
      id="aboutme"
    >
      <h2 class="text-[#1df2dc] font-orbitron tracking-widest font-semibold text-4xl md:text-5xl text-center w-full capitalize">
        Sobre Mí
      </h2>

      <div class="backdrop-blur-[2px] text-white text-start md:text-center tracking-wider font-lato flex flex-col justify-center items-center gap-y-8 text-lg px-4 md:px-0 md:text-2xl w-full max-w-[600px]">
        <p class="text-pretty ">
          <T>¡</T>Hola<T>!</T> Soy Gixi<T>,</T> desarrollador <T>frontend</T>{" "}
          con experiencia en proyectos freelance<T>.</T> <T>A</T>demás de crear
          aplicaciones web con React<T>.</T>js y Next<T>.</T>js<T>, </T>
          me gusta aventurarme en el <T>backend</T> y estoy aprendiendo{" "}
          <T>Rust</T>
          <T>.</T>
        </p>

        <p class="text-pretty ">
          <T>G</T>arantizo el correcto funcionamiento de las aplicaciones a
          través del <T>testing</T> y siempre busco contribuir al desarrollo de
          productos innovadores<T>.</T>
        </p>

        <p class="text-pretty ">
          <T>Abierto</T> a nuevos desafíos<T>,</T> estoy preparado para aportar
          con código <T>legible</T> y <T>buenas prácticas</T>
          <T>.</T>
        </p>

        <p class="text-pretty ">
          <T>S</T>i tienes alguna consulta o <T>proyecto</T> en mente<T>, </T>
          no dudes en contactarme
          <T>.</T>
        </p>
      </div>

      <div class="px-4 w-full flex justify-center items-center">
        <p class="w-full md:w-[60%] text-start md:text-center text-white text-lg md:text-2xl text-balance">
          <T> React.js</T>,<T> Next.js</T>,<T> Node.js</T>,<T> Express.js</T>,
          <T> React Native</T>,<T> Playwright</T>,<T> GIT</T>,<T> Vite</T>,
          <T> JavaScript</T>,<T> styled componentes</T>,<T> Tailwind</T>,
          <T> CSS</T>,<T> HTML</T>.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
