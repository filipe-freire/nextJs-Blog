import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import BlogContent from 'components/BlogContent';
import PreviewAlert from 'components/PreviewAlert';
import ErrorPage from 'next/error';
import { getBlogBySlug, getAllBlogs } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import { urlFor } from 'lib/api';
import moment from 'moment';
import { useRouter } from 'next/router';
// import { useRouter } from "next/router"; // gets query/slug

const BlogDetail = ({ blog, preview }) => {
  //const { query } = useRouter();
  const router = useRouter();

  if (!router.isFallback && !blog.slug) {
    //if we don't have any slug, render error comp.
    return <ErrorPage statusCode="404" />;
  }

  if (router.isFallback) {
    //if we don't have any slug
    return <PageLayout className="blog-detail-page">Loading...</PageLayout>;
  }

  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          {preview && <PreviewAlert />}
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(500).url()}
            author={blog.author}
            date={moment(blog.date).format('LL')}
          />
          <hr />
          {/* Blog Content Here */}
          <BlogContent content={blog.content} />
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const blog = await getBlogBySlug(params.slug, preview);
  return {
    props: { blog, preview }
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map(b => ({ params: { slug: b.slug } }));
  return {
    paths,
    fallback: true
  };
}

export default BlogDetail;
