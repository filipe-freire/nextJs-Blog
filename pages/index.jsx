import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";

import { getAllBlogs } from "lib/api";

export default function Home({ blogs }) {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      <Row className="mb-5">
        <Col md="10">
          <CardListItem />
        </Col>
        <Col md="4">
          <CardItem />
        </Col>
      </Row>
    </PageLayout>
  );
}

// Called during build time! Always on the server
// Provides props to my page & creates static page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
