import { FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

function Icons() {
  return (
    <div className="flex items-center justify-between gap-2 w-full h-full text-white px-10">
      <a
        className="inline-flex items-center justify-center h-full w-full"
        href="https://www.linkedin.com/in/varun-rana-236171191/"
        target={"_blank"}
        rel="noreferrer">
        <FaLinkedinIn name="linkedin" title="linkedin" size={24} />
      </a>
      <a
        className="inline-flex items-center justify-center h-full w-full"
        href="https://www.instagram.com/varun8048/"
        target={"_blank"}
        rel="noreferrer">
        <FaInstagram title="instagram" size={24} />
      </a>
      <a
        className="inline-flex items-center justify-center h-full w-full"
        href="https://github.com/varunrana123"
        target={"_blank"}
        rel="noreferrer">
        <FaGithub title="gitHub" size={24} />
      </a>
      <a
        className="inline-flex items-center justify-center h-full w-full"
        href="https://twitter.com/Varun_Ranaa"
        target={"_blank"}
        rel="noreferrer">
        <FaTwitter title="twitter" size={24} />
      </a>
    </div>
  );
}

export default Icons;
