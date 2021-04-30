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
          >
            <FacebookIcon width="50" height="50" className="mx-4 my-1" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon width="50" height="50" className="mx-4 my-1" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon width="50" height="50" className="mx-4 my-1" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon width="50" height="50" className="mx-4 my-1" />
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
