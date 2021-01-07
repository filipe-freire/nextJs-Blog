import { Container } from "react-bootstrap";
import Head from "next/head";
import BlogNavbar from "components/BlogNavbar";
import Footer from "components/Footer";

const PageLayout = ({ children, className }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <BlogNavbar />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <Footer />
      </Container>
    </>
  );
};

export default PageLayout;
