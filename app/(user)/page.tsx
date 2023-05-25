import { cookies } from "next/headers";
import { groq } from "next-sanity";
import PreviewSuspense from '@/components/PreviewSuspense';
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";
import { client } from "@/lib/sanity.client";

const query = groq`
  *[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const HomePage = async () => {

  const previewData = cookies().has('__next_preview_data');

  if (previewData) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query}/>
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query);
  
  return (
    <BlogList posts={posts}/>
  )
}

export default HomePage