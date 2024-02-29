import { MailSVG, LinkedInSVG, GithubSVG, CVSVG } from "../svgs.jsx";

function Contact() {
  const ITEMS = [
    {
      id: 0,
      icon: <LinkedInSVG />,
      text: "Giovanni Liotta",
      href: "https://www.linkedin.com/in/giovanniliotta/",
    },
    {
      id: 1,
      icon: <MailSVG />,
      text: "gioliotta.io@gmail.com",
      href: "mailto:gioliotta.io@gmail.com",
    },
    {
      id: 2,
      icon: <CVSVG />,

      text: "CV",
      href: "https://drive.google.com/file/d/1px3-gUOhCTtZZHeU045of9aHTWHRCr1v/view?usp=drive_link",
    },
    {
      id: 3,
      icon: <GithubSVG />,
      text: "gixilym",
      href: "https://github.com/gixilym",
    },
  ];

  return (
    <section
      class="bg-[#0e6c6333] min-h-[80vh] flex flex-col justify-center items-center py-20 gap-y-20"
      id="contact"
    >
      <h2 class="text-[#1df2dc] text-center font-semibold w-full font-orbitron tracking-wider text-5xl md:text-7xl">
        Contacto
      </h2>
      <ul class="w-full flex flex-col justify-center items-center gap-y-6 px-6 sm:px-0">
        {ITEMS.map(item => (
          <li
            key={item.id}
            onClick={() => window.open(item.href, { target: "_blank" })}
            target="_blank"
            class="flex flex-row backdrop-blur-[2px] justify-between items-center rounded-2xl bg-[#00000070] max-h-24 w-full max-w-[500px] p-6 cursor-pointer duration-75 hover:bg-[rgba(0,0,0,1)]"
          >
            <p class="text-[#1df2dc] text-xl md:text-3xl">{item.text}</p>
            {item.icon}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;
