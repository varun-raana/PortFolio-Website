import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

function Icons() {
  return (
    <div className="flex items-center justify-between gap-2 w-full h-full text-white px-10">
      <a
        className="inline-flex items-center justify-center h-full w-full hover:text-amber-600"
        href="https://www.linkedin.com/in/varun-rana-236171191/"
        target={"_blank"}
        rel="noreferrer">
        <FaLinkedinIn name="linkedin" title="linkedin" size={24} />
      </a>

      <a
        className="inline-flex items-center justify-center h-full w-full hover:text-amber-600"
        href="https://github.com/varunrana123"
        target={"_blank"}
        rel="noreferrer">
        <FaGithub title="gitHub" size={24} />
      </a>
      <a
        className="inline-flex items-center justify-center h-full w-full hover:text-amber-600"
        href="https://twitter.com/Varun_Ranaa"
        target={"_blank"}
        rel="noreferrer">
        <FaTwitter title="twitter" size={24} />
      </a>
    </div>
  );
}

export default Icons;
