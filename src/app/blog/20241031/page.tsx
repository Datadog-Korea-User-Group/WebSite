import { Metadata } from "next";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Datadog CI Visibility를 활용한 GitHub Actions 모니터링",
  description: `CI/CD는 개발 과정에서 생산성과 안정성을 높이기 위해 꼭 필요한 프로세스로 자리 잡았습니다. 이번 발표에서는 Datadog의 CI Visibility(CI Pipeline Visibility)를 이용해 개발 과정에서 사용 중인 다양한 GitHub Actions CI 파이프라인을 모니터링하고 개선하는 방법을 소개드립니다.`,
  keywords: ["Datadog", "CI Visibility", "Intelligent Test Runner"],
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://datadogkrug.vercel.app/blog/20241031",
    title: "Datadog CI Visibility를 활용한 GitHub Actions 모니터링",
    description:
      "CI/CD는 개발 과정에서 생산성과 안정성을 높이기 위해 꼭 필요한 프로세스로 자리 잡았습니다. 이번 발표에서는 Datadog의 CI Visibility(CI Pipeline Visibility)를 이용해 개발 과정에서 사용 중인 다양한 GitHub Actions CI 파이프라인을 모니터링하고 개선하는 방법을 소개드립니다.",
    images: [
      {
        url: "https://datadogkrug.vercel.app/api/og?path=/blog/20241031",
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
