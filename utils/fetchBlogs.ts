import { Post } from "../typing";

export const fetchBlog = async() =>{
    const url = new URL("/api/getBlogs", `${process.env.NEXT_PUBLIC_BASE_URL}`)
    const res = await fetch(url);

    const data = await res.json();
    const posts: Post[] = data.posts;
    console.log("fetching");
    return posts;
};