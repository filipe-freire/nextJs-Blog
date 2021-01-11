import { useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';

import { useGetBlogsPages } from 'actions/pagination';
import { getAllBlogs } from 'lib/api';

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 }
  });

  // loadMore: to load more data
  // isLoadingMore: is true whenever we are making a request to fetch data
  // isLoadingMore: is true when we loaded all data

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({ blogs, filter });

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
      <Row className="mb-5">{pages}</Row>
      <div style={{ textAlign: 'center' }}>
        <Button
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
          size="lg"
          variant="outline-secondary"
        >
          {isLoadingMore ? '...' : isReachingEnd ? 'No More Blogs' : 'More Blogs'}
        </Button>
      </div>
    </PageLayout>
  );
}

// Called during build time! Always on the server
// Provides props to my page & creates static page
export async function getStaticProps() {
  const blogs = await getAllBlogs({ offset: 0, date: 'desc' }); // takes care of pagination: if offset 0 -> blogs from 0 to 3, and so on..
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
