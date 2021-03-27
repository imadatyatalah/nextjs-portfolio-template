import BaseLayout from "@/layouts/BaseLayout";

import "@/styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
};

export default MyApp;
