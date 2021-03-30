const PrimaryBtn = ({ children }) => {
  return (
    <>
      <button className="text-white bg-primary font-medium text-xl py-3 px-5 rounded-md">
        {children}
      </button>
    </>
  );
};

export default PrimaryBtn;
