import { prefix } from "@/src/constants/prefix";

export const DefaultOpenGraph = {
  type: "website",
  locale: "ko_KR",
  url: "https://datadogkrug.vercel.app",
  title: "Datadog 한국사용자모임",
  description:
    "DatadogKRUG (Datadog Korea User Group)은 Monitoring, Observability와 관련된 모든 주제에 대해서 지식을 교류하며 함께 성장하는 모임입니다.",
  images: [
    {
      url: `${prefix}/images/OG.png`,
      width: 1200,
      height: 630,
      alt: "DatadogKRUG",
    },
  ],
};

export const DefaultMetadata = {
  title: "Datadog 한국사용자모임",
  description:
    "DatadogKRUG (Datadog Korea User Group)은 Monitoring, Observability와 관련된 모든 주제에 대해서 지식을 교류하며 함께 성장하는 모임입니다.",
};
