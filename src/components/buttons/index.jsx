const sizeClassnames = {
  default: "font-medium text-xl py-3 px-5",
};

const colorClassnames = {
  primary: `text-white bg-primary rounded-sm`,
};

const Button = ({ children, color, size, className, ...rest }) => {
  return (
    <>
      <button
        className={`${colorClassnames[color]} ${sizeClassnames[size]} ${className}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
