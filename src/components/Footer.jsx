import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
} from "@/UI/icons";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-dark">
        <div className="flex justify-center items-center flex-wrap py-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 my-1"
          >
            <FacebookIcon width="50" height="50" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 my-1"
          >
            <InstagramIcon width="50" height="50" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 my-1"
          >
            <TwitterIcon width="50" height="50" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 my-1"
          >
            <LinkedInIcon width="50" height="50" />
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
