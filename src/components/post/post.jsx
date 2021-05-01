const Post = ({ title, date, tags, description }) => {
  return (
    <>
      <div
        className="relative bg-white text-dark my-[15px] p-6 rounded-[4px] md:my-0"
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

export default Post;
