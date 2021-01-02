import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import FilteringMenu from 'components/FilteringMenu';

import { getAllBlogs } from 'lib/api';

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: {
      list: 0
    }
  });
  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        {blogs.map(blog =>
          filter.view.list ? (
            <Col key={`${blog.slug}-list`} md="9">
              <CardListItem />
            </Col>
          ) : (
            <Col key={blog.slug} md="4">
              <CardItem
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                author={blog.author}
                image={blog.coverImage}
                slug={blog.slug}
                link={{
                  href: `/blogs/${blog.slug}`
                }}
              />
            </Col>
          )
        )}
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
      blogs
    }
  };
}

//? Static Page
// Created at build time
// When making a req, we receive same html, css, js files

//? Dynamic Page
// Created at request time
// Little bit slower, time depends on the data we fetch
