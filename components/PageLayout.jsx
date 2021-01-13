import { Container } from 'react-bootstrap';
import Head from 'next/head';
import BlogNavbar from 'components/BlogNavbar';
import Footer from 'components/Footer';
import { useTheme } from 'providers/ThemeProvider';

const PageLayout = ({ children, className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme.type}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <BlogNavbar theme={theme} toggleTheme={toggleTheme} />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <Footer />
      </Container>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-in-out 0s, background 0.5s ease-in-out 0s;
          }
        `}
      </style>
    </div>
  );
};

export default PageLayout;
