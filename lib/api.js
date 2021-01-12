import client from './sanity';
import imageUrlBuilder from '@sanity/image-url'; // handle image sizes in blogContent component

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllBlogs({ offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }) {
  const results = await client //GROQ in Sanity docs - sanity query cheatsheet
    .fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 6}]`); // change the number here to fetch more blogs starting from: x
  return results;
}

export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content[]{..., "asset": asset->}
    }`,
      { slug }
    )
    .then(res => res?.[0]);

  return result;
}
