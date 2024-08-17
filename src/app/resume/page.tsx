import Image from "next/image";

import { Container } from "@/src/components/Container";
import { Events } from "@/src/components/Events";
import { Heading } from "@/src/components/Heading";
import { Highlight } from "@/src/components/Highlight";
import { Paragraph } from "@/src/components/Paragraph";
import { WorkHistory } from "@/src/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <span className='text-4xl'>💼</span>
      <Heading className='font-black'>Work History</Heading>
      <Paragraph className='max-w-xl mt-4'>
        I&apos;m a full-stack developer that loves <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
