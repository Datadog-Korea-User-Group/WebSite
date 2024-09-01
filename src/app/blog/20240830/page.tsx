import { Metadata } from "next";

import { DefaultOpenGraph } from "@/src/app/shared-metadata";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "대규모 이벤트와 함께 진화한 올리브영의 대시보드 변천사",
  description: `올리브영은 데이터독 기반 모니터링 체계를 구축하여 올영세일과 같은 대규모 온라인몰 이벤트 운영 시 시스템 안정성을 강화하고,\n서비스 성능을 극대화했습니다.\n이에 본 세션에서는 올리브영 SRE 엔지니어가 사용자 경험 개선에 직접적 영향을 미친 대시보드 진화 과정을 소개하고,\n개발팀을 위한 데이터독 활용 노하우를 추가로 공유합니다.`,
  keywords: ["Datadog", "Dashboard", "OliveYoung"],
  openGraph: {
    ...DefaultOpenGraph,
    url: "https://datadogkrug.vercel.app/blog/20240830",
    title: "대규모 이벤트와 함께 진화한 올리브영의 대시보드 변천사",
    description:
      "올리브영 SRE 엔지니어가 사용자 경험 개선에 직접적 영향을 미친 대시보드 진화 과정을 소개하고, 개발팀을 위한 데이터독 활용 노하우를 추가로 공유합니다.",
    images: [
      {
        url: "https://datadogkrug.vercel.app/api/og?path=/blog/20240830",
        width: 1200,
        height: 630,
        alt: "Web Worker를 사용한 Next.js 성능 최적화",
      },
    ],
  },
};

export default function Page() {
  return <Content />;
}
