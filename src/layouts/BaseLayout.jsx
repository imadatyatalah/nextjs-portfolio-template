import Footer from "@/components/Footer";

const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="tracking-wide">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
