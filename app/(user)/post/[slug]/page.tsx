import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import PortableText from "react-portable-text"

type Props = {
  params: {
    slug: String;
  }
};

export const revalidate = 30;

export async function generateStaticParams() {
  const queryParams = groq`
    *[_type == 'post']
    {
      slug
    }
  `;

  const slugs: Post[] = await client.fetch(queryParams);
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug
  }))
}

const Post = async ({ params: { slug } }: Props) => {

  const query = groq`
    *[_type == 'post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->,
    }
  `;

  const post: Post = await client.fetch(query, { slug });

  console.log(post.body)

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border-[#F7AB0A] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              className="object-cover object-center mx-auto"
              fill
            />
          </div>

          <section className="p-5 bg-[#F7AB0A] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* TODO: Author BIO */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex space-x-2 items-center justify-end mt-auto">
                {post.categories.map(category => (
                  <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4" key={category._id}>{category.title}</p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText

      /* 
        Para estilizar el portable Tex se puede utilizar el serializer o el tailwind prose, si se activa el
        tailwind prose, tiene mayor peso sobre el serializer.
      */

        className="max-w-4xl mx-auto my-20 prose prose-h1:text-red-800"
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        content={post.body}
        serializers={{
          image: (props: any) => (
            <div className="flex flex-col justify-center items-center my-10">
              <Image src={urlFor(props).url()} alt="fll" width={800} height={800} className="object-cover" />
              <span className="text-centet text-sm italic text-gray-400 mt-2">{props.alt}</span>
            </div>
          )
        }}
      />
    </article>
  )
}

export default Post