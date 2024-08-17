"use client";

import React from "react";

import { datadogRum } from "@datadog/browser-rum";

export const Datadog = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    // if (process.env.NODE_ENV === "development") return;
    console.log(process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID, process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN);
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
    console.log("Datadog initialized");
  }, []);
  return <>{children}</>;
};
