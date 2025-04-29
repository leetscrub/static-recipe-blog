import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import React from "react"
import fs from "fs"
import matter from "gray-matter"
import path from 'path'

export const dynamic = 'error'; // ⛔ Prevent dynamic rendering

function getPostContent(slug) {
    const folder = path.join(process.cwd(), "recipes")
    const file = path.join(folder, `${slug}.md`)
    const content = fs.readFileSync(file, "utf8")

    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata('recipes')
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params; // ✅ await here
    const title = slug ? `The Bubbly Baker ⋅ ${slug.replaceAll('_', ' ')}` : 'The Bubbly Baker'

    return {
        title
    }
}


export default async function RecipePage({ params }) {
    const { slug } = await params; // ✅ await here
    const post = getPostContent(slug)

    return (
        <main>
            <article>
                <Markdown>{post.content}</Markdown>
            </article>
        </main>
    )
}