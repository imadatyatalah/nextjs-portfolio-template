import Image from "next/image";
import Link from "next/link";

import Button from "@/components/buttons";

const Post = ({ title, date, tags, description }) => {
  return (
    <>
      <div
        className="relative bg-white text-dark my-[15px] p-5 rounded-[4px] md:my-0"
        style={{ boxShadow: "0px 4px 10px 0px #BBE1FA40" }}
      >
        <h2 className="font-bold text-[22px] lg:text-[26px]">{title}</h2>

        <div className="lg:text-lg pt-[15px] pb-[10px]">
          <time dateTime="2020-02-12">{date}</time>
          {" | "}
          <span>{tags}</span>
        </div>

        <p>{description}</p>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className="px-[30px] md:px-[60px] lg:px-[120px]">
        <div className="py-6 flex flex-col justify-center items-center text-center lg:flex-row-reverse lg:text-left lg:justify-between">
          <div className="relative rounded-full my-4 w-72 h-72 sm:w-[22rem] sm:h-[22rem] lg:w-96 lg:h-96">
            <Image
              src="/user-avatar.jpg"
              layout="fill"
              alt="avatar"
              className="rounded-full bg-light"
            />
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-[32px] font-bold text-dark px-4 lg:px-0 lg:text-[44px]">
              Hi, I'm John, Creative Technologist
            </h1>
            <p className="text-dark my-4 px-4 lg:px-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <Button color="primary" size="default">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Recent posts section */}
      <section className="bg-lightCyan py-4 px-[30px] md:py-8 md:px-[60px] lg:px-[120px]">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="font-normal text-[22px] text-dark">Recent posts</h1>

            <Link href="/blog">
              <a className="text-secondary">View all</a>
            </Link>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-5 md:pt-5">
            <Post
              title="Making a design system from scratch"
              date="12 Feb 2020"
              tags="Design, Pattern"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />

            <Post
              title="Making a design system from scratch"
              date="12 Feb 2020"
              tags="Design, Pattern"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
