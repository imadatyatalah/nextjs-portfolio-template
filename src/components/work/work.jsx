import Image from "next/image";

const Work = ({ imgSrc, title, date, tags, description }) => {
  return (
    <>
      <div className="flex flex-col py-5 lg:flex-row lg:items-center">
        <div className="flex rounded-md pb-4 lg:pb-0 lg:pr-4">
          <Image
            src={imgSrc}
            width="500"
            height="300"
            alt="place holder"
            className="rounded-md"
          />
        </div>

        <div className="relative text-dark">
          <h2 className="font-bold text-2xl lg:text-3xl">{title}</h2>

          <div className="flex space-x-5 py-3 lg:py-4 lg:space-x-6">
            <time
              className="bg-[#142850] text-white font-black px-3 rounded-full lg:text-lg"
              dateTime="2020-02-12"
            >
              {date}
            </time>
            <span className="text-light lg:text-xl">{tags}</span>
          </div>

          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Work;
