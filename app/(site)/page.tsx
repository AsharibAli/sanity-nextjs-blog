import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "../components/Blog";
import { Blog } from "@/types/blog";

export default async function Home(){
  const posts = await getPosts();

  return (
    <div className="py-5">
      {posts?.length > 0 ? (
        posts.map((post: Blog) => <BlogItem key={post._id} blog={post}/>)
      ): (
        <p>No posts found</p>
      )}
    </div>
  )
}