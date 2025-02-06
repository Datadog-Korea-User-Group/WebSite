import { Metadata } from "next";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "데이터독 자격증 후기와 소소한 팁",
  description: ` 데이터독 자격증에 대한 경험을 간단히 이야기하고, 후반부에서는 그동안 데이터독을 활용해 온 방법들을 공유하는 라이트한 발표입니다.`,
  keywords: ["Datadog", "Certification"],
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://datadogkrug.vercel.app/blog/20250123",
    title: "데이터독 자격증 후기와 소소한 팁",
    description:
      "데이터독 자격증에 대한 경험을 간단히 이야기하고, 후반부에서는 그동안 데이터독을 활용해 온 방법들을 공",
    images: [
      {
        url: "https://datadogkrug.vercel.app/api/og?path=/blog/20250123",
        width: 1200,
        height: 630,
        alt: "DataDogKRUG",
      },
    ],
  },
};

export default function Page() {
  return <Content />;
}
