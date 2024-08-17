import { Metadata } from "next";
import { redirect } from "next/navigation";

import { Container } from "@/src/components/Container";
import { SingleEvent } from "@/src/components/Event";
import { Events } from "@/src/constants/events";
import { Event } from "@/src/types/products";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = Events.find((p) => p.slug === slug) as Event | undefined;
  if (event) {
    return {
      title: event.title,
      description: event.description,
    };
  } else {
    return {
      title: "Events | DatadogKRUG",
      description:
        "DatadogKRUG (Datadog Korea User Group)은 Monitoring, Observability와 관련된 모든 주제에 대해서 지식을 교류하며 함께 성장하는 모임입니다.",
    };
  }
}

export default function SingleProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const event = Events.find((p) => p.slug === slug);

  if (!event) {
    redirect("/events");
  }
  return (
    <Container>
      <SingleEvent event={event} />
    </Container>
  );
}
