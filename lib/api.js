import client from "./sanity"

const blogFields = `
title, 
subtitle, 
"slug": slug.current`


export async function getAllBlogs(){
   const results = await client //GROQ in Sanity docs - sanity query cheatsheet
    .fetch(`*[_type == "blog"]{${blogFields}}`);
    return results; 
}