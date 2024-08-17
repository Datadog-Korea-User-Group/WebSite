"use client";

import React, { Suspense } from "react";

import { datadogRum } from "@datadog/browser-rum";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const Monitoring = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    if (process.env.NODE_ENV === "development") return;
    if (!process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID || !process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN) return;

    datadogRum.init({
      applicationId: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID,
      clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
      site: "datadoghq.com",
      service: "datadogkrug",
      sessionSampleRate: 100,
      sessionReplaySampleRate: 100,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: "allow",
    });
  }, []);

  return (
    <Suspense fallback={<></>}>
      <Analytics />
      <SpeedInsights />
      {children}
    </Suspense>
  );
};
