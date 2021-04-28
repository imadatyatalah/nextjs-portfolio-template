import Image from "next/image";

import Button from "@/components/buttons";

const Home = () => {
  return (
    <>
      <section className="px-[30px] md:px-[60px] lg:px-[120px]">
        <div className="py-6 flex flex-col justify-center items-center text-center lg:flex-row-reverse lg:text-left lg:justify-between">
          <div className="relative rounded-full my-4 w-80 h-80 sm:w-[22rem] sm:h-[22rem] lg:w-96 lg:h-96">
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
    </>
  );
};

export default Home;
