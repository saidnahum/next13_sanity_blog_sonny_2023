import urlFor from "@/lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";


type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {

  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {
          posts.map(post => (
            <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
              <article className="group cursor-pointer flex flex-col">
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    className="object-cover object-left lg:object-center"
                    fill
                  />
  
                  <div className="absolute text-white bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg p-5 flex justify-between">
                    <div>
                      <p className="font-bold">{post.title}</p>
  
                      <p>
                        {new Date(post._createdAt).toLocaleDateString(
                          "en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        }
                        )}
                      </p>
                    </div>
  
                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                      {
                        post.categories.map(category => (
                          <div key={category._id} className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                            {category.title}
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
  
                <div className="mt-5 flex-1">
                  <p className="underline font-bold">{post.title}</p>
                  <p className="text-gray-500 line-clamp-2">{post.description}</p>
                </div>
  
                <p className="flex items-center font-bold mt-5 group-hover:underline">
                  Read Post
                  <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
                </p>
              </article>
            </ClientSideRoute>
          ))
        }
      </div>
    </div>
  )
}

export default BlogList