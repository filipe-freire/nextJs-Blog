import client from "./sanity"

export async function getAllBlogs(){
   const results = await client //GROQ in Sanity docs - sanity query cheatsheet
    .fetch(`*[_type == "blog"]{title, subtitle, slug}`);
    return results; 
}