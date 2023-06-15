import Form from "@/components/form"
import { FormValues } from "@/components/form.props"
import { BlogType } from "@/interfaces/blog.interface"
import Layout from "@/layout"
import { BlogService } from "@/services/blog.service"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import React from "react"

const EditPage: NextPage<EditBlogPageProps> = ({ blog }) => {
  const onSubmit = async (formData: FormValues) => {
    const data = await BlogService.editBlog(formData, blog._id)
    return data
  }

  const router = useRouter()
  return (
    <Layout>
      <Form onSubmit={onSubmit} sectionTitle={"Edit blog"} values={blog} />
    </Layout>
  )
}

export default EditPage

export const getServerSideProps: GetServerSideProps<
  EditBlogPageProps
> = async ({ query }) => {
  const blog = await BlogService.getBlogBySlug(query.slug as string)
  return {
    props: { blog },
  }
}

interface EditBlogPageProps {
  blog: BlogType
}
