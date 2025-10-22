import { Inter } from "next/font/google";
import blogPosts from "../../../data/blogPosts";
import PostHeader from "../../../components/blog/PostHeader";
import PostImage from "../../../components/blog/PostImage";
import PostContent from "../../../components/blog/PostContent";


const inter = Inter({ subsets: ["latin"] });

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  return (
    <div className={`px-8 lg:px-32 mt-10 ${inter.className}`}>
      <PostHeader title={post.title} date={post.date} />
      <PostImage src={post.image} alt={post.title} />
      <PostContent content={post.content} />
    </div>
  );
}

