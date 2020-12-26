import PageLayout from "components/PageLayout";
// import { useRouter } from "next/router"; // gets query/slug
import { getBlogBySlug } from "lib/api";

const BlogDetail = ({ blog }) => {
  const { query } = useRouter();
  return (
    <PageLayout>
      <h1>Hello Detail Page - {blog.slug}</h1>
    </PageLayout>
  );
};

export async function getServerSideProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
}

export default BlogDetail;
