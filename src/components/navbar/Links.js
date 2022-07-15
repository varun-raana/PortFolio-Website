import Link from "../../UI/Link";

function Links({ isVisible }) {
  let links = [
    { name: "About Me", link: "/about-me" },
    { name: "my projects", link: "/my-projects" },
  ];

  return (
    <div
      className={`md:flex md:max-w-lg items-center justify-between md:pb-0 pb-4 left-0 md:space-x-6 absolute md:static md:w-full w-72 md:z-auto z-[1] md:h-full h-auto transition-all duration-500 ease-linear ${
        isVisible
          ? "left-0  antialiased opacity-100"
          : "left-[-100%] md:opacity-100 opacity-0"
      }`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            className="text-sm font-medium tracking-wider uppercase bg-white h-full w-full md:px-2 p-7 px-10 flex items-center justify-center "
            to={link.link}>
            {link.name}
          </Link>
        );
      })}
      <a
        href="tel:+917827304056"
        className={
          "uppercase font-bold tracking-wider md:px-5 p-5 h-full w-full sm:w-full flex items-center justify-center text-white bg-gradient-to-br from-black to-gray-800 text-sm"
        }>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:h-8 h-6 md:w-8 w-6 flex-none "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        hire me
      </a>
    </div>
  );
}

export default Links;
