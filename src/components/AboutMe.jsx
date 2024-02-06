function AboutMe() {
  const T = ({ children }) => (
    <span className="text-[#1df2dc] font-lato font-semibold">{children}</span>
  );

  return (
    <section
      className="pt-20 bg-[#17c3b233] min-h-[80vh] flex flex-col items-center justify-center overflow-x-hidden gap-x-3 gap-y-20"
      id="aboutme"
    >
      <h2 className="text-[#1df2dc] font-orbitron tracking-widest font-semibold text-4xl md:text-5xl text-center w-full capitalize">
        Sobre Mí
      </h2>

      <div className="backdrop-blur-[2px] text-white text-center text-pretty tracking-wider font-lato flex flex-col justify-center items-center gap-y-2 text-xl px-2 md:px-0 md:text-2xl w-full max-w-[700px]">
        <p>
          Soy desarrollador freelance con
          <T> más de 1 año </T>
          trabajando en aplicaciones web en equipo.
        </p>
        <p>
          También me gusta el desarrollo móvil y me encuentro
          <T> creando </T>apps con React Native.
        </p>
        <br />
        <p>
          Tecnologías:
          <br />
          <T> React.js</T>,<T> Next.js</T>,<T> Node.js</T>,<T> Express.js</T>,
          <T> React Native</T>,<T> GIT</T>,<T> Vite</T>,<T> JavaScript</T>,
          <T> styled componentes</T>,<T> Tailwind</T>,<T> CSS</T>,<T> HTML</T>.
        </p>

        <p>
          Me gustaría contribuir al desarrollo de productos innovadores, creando
          código
          <T> legible</T>
          <T> escalable</T>
          <T> buenas prácticas</T>.
        </p>
        <br />
        <p className="text-pretty">
          Si tienes alguna consulta, no dudes en contactarme.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
