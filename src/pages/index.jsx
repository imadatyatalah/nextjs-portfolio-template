import Image from "next/image";

import Button from "@/components/buttons";

const Home = () => {
  return (
    <>
      <section className="py-6 flex flex-col justify-center items-center text-center">
        <div className="relative rounded-full my-4 w-80 h-80 sm:w-96 sm:h-96">
          <Image
            src="/user-avatar.jpg"
            layout="fill"
            alt="avatar"
            className="avatar"
          />
        </div>
        <h1 className="text-3xl font-bold text-dark px-4">
          Hi, I'm John, Creative Technologist
        </h1>
        <p className="text-dark px-4 my-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <Button color="primary" size="default">
          Download Resume
        </Button>
      </section>
    </>
  );
};

export default Home;
