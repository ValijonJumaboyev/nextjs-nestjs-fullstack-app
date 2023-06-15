import { BlogType } from "@/interfaces/blog.interface"
import Layout from "@/layout"
import { BlogService } from "@/services/blog.service"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import React from "react"

const DetailedBlog: NextPage<DetailedBlogProps> = ({ blog }) => {
  const router = useRouter()
  return (
    <Layout>
      <div className="container">
        <h1 className="mb-5">{blog.title}</h1>
        <h5 className="mb-3">{blog.excerpt}</h5>
        <p className="mb-5">{blog.description}</p>
        <button
          className="btn btn-outline-info w-100"
          onClick={() => {
            router.push("/")
          }}
        >
          Back
        </button>
      </div>
    </Layout>
  )
}

export default DetailedBlog

export const getServerSideProps: GetServerSideProps<
  DetailedBlogProps
> = async ({ query }) => {
  const blog = await BlogService.getBlogBySlug(query.slug as string)
  return {
    props: { blog },
  }
}

interface DetailedBlogProps {
  blog: BlogType
}
