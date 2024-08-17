import { Metadata } from "next";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";
import { Blogs } from "@/src/components/Blogs";
import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";
import { Paragraph } from "@/src/components/Paragraph";

import { getAllBlogs } from "@/lib/getAllBlogs";

export const metadata: Metadata = {
  title: "Blogs | DatadogKRUG",
  description: "DatadogKRUG의 블로그입니다. 각종 정보 및 밋업 자료를 공유합니다.",
  openGraph: DefaultOpenGraph,
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className='text-4xl'>📝</span>
      <Heading className='font-black pb-4'>Blog</Heading>
      <Paragraph className='pb-10'>DatadogKRUG의 블로그입니다. 각종 정보 및 밋업 자료를 공유합니다.</Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
