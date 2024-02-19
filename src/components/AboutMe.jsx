function AboutMe() {
  const T = ({ children }) => (
    <span class="text-[#1df2dc] font-lato font-semibold">{children}</span>
  );

  return (
    <section
      class="pt-20 bg-[#17c3b233] min-h-[80vh] flex flex-col items-center justify-center overflow-x-hidden gap-x-3 gap-y-20"
      id="aboutme"
    >
      <h2 class="text-[#1df2dc] font-orbitron tracking-widest font-semibold text-4xl md:text-5xl text-center w-full capitalize">
        Sobre Mí
      </h2>

      <div class="backdrop-blur-[2px] text-white text-center text-pretty tracking-wider font-lato flex flex-col justify-center items-center gap-y-8 text-lg px-2 md:px-0 md:text-xl w-full max-w-[600px]">
        <p>
          <T>¡</T>Hola<T>!</T> Soy Gixi<T>,</T> desarrollador <T>frontend</T>{" "}
          con experiencia en proyectos freelance<T>,</T> especializado en la
          creación de aplicaciones web<T>.</T>
        </p>
        <p>
          <T>A</T>dicional al desarrollo me gusta realizar<T> testing </T> para
          comprobar el correcto funcionamiento de la aplicación<T>.</T>
        </p>

        <p>
          <T>A</T>demás<T>,</T> estoy ampliando mis habilidades fuera del front
          <T>,</T>
          <T> aprendiendo </T>
          backend y Rust<T>.</T>
        </p>

        <p>
          <T>D</T>eseo contribuir al desarrollo de productos innovadores
          <T>, </T>
          creando código
          <T> legible</T> e implementando
          <T> buenas prácticas.</T>
        </p>

        <p class="text-pretty">
          <T>E</T>stoy <T>abierto</T> a nuevas oportunidades y desafíos<T>. </T>
          Si tienes alguna consulta o proyecto en mente<T>,</T> no dudes en
          contactarme
          <T>.</T>
        </p>

        <div class="">
          <span>Stack: </span>
          <p class="text-balance">
            <T> React.js</T>,<T> Next.js</T>,<T> Node.js</T>,<T> Express.js</T>,
            <T> React Native</T>,<T> Playwright</T>,<T> GIT</T>,<T> Vite</T>,
            <T> JavaScript</T>,<T> styled componentes</T>,<T> Tailwind</T>,
            <T> CSS</T>,<T> HTML</T>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
