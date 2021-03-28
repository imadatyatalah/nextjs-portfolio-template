import { ImFacebook2, ImTwitter } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-dark">
        <div className="flex justify-center items-center flex-wrap py-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook2 color="#21243D" size="40" className="mx-4 my-1" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram color="#21243D" size="40" className="mx-4 my-1" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImTwitter color="#21243D" size="40" className="mx-4 my-1" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="#21243D" size="40" className="mx-4 my-1" />
          </a>
        </div>
        <div>
          <p>Copyright &copy;2021 All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
