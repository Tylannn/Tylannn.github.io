import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <h3>
            <Link href={post.slug}>
            {post.title}
          </Link>
          </h3>
        </article>
      ))}
    </div>
  )
}
