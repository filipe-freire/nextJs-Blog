import { useSWRPages } from 'swr';
import { useGetBlogs } from 'actions';
import CardItem from 'components/CardItem';
import CardItemBlank from 'components/CardItemBlank';
import CardListItem from 'components/CardListItem';
import CardListItemBlank from 'components/CardListItemBlank';
import { Col } from 'react-bootstrap';

const BlogList = ({ blogs, filter }) => {
  return blogs.map(blog =>
    filter.view.list ? (
      <Col key={`${blog.slug}-list`} md="9">
        <CardListItem
          title={blog.title}
          subtitle={blog.subtitle}
          date={blog.date}
          author={blog.author}
          slug={blog.slug}
          link={{
            href: `/blogs/${blog.slug}`
          }}
        />
      </Col>
    ) : (
      <Col key={blog.slug} md="6" lg="4">
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
  );
};

export const useGetBlogsPages = ({ blogs, filter }) => {
  return useSWRPages(
    `index-page`,
    ({ offset, withSWR }) => {
      const { data: paginatedBlogs, error } = withSWR(useGetBlogs({ offset, filter }));

      if (!offset && !paginatedBlogs && !error) {
        return <BlogList blogs={blogs} filter={filter} />;
      }

      if (!paginatedBlogs) {
        return Array(3)
          .fill(0)
          .map((_, i) =>
            filter.view.list ? (
              <Col key={i} md="9">
                <CardListItemBlank />;
              </Col>
            ) : (
              <Col key={`${i}-item`} md="6" lg="4">
                <CardItemBlank />;
              </Col>
            )
          );
      }
      return <BlogList blogs={paginatedBlogs} filter={filter} />;
    },

    // here we compute the offset that will get passed into this previous function
    // SWR: data we get from the "withSWR" function;
    // index: number of the current paginated page
    (SWR, index) => {
      if (SWR.data && SWR.data.length === 0) return null;
      // the number 6 here is the amount of blogs loaded in the homepage
      // we have to change hte lib/api.js offset as well if we change
      // the number here!
      return (index + 1) * 6;
    },
    [filter]
  );
};
