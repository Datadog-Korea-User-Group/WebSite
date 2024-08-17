"use client";

import React from "react";

import { datadogRum } from "@datadog/browser-rum";

export const Datadog = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    if (process.env.NODE_ENV === "development") return;
    if (!process.env.DATADOG_APPLICATION_ID || !process.env.DATADOG_CLIENT_TOKEN) return;

    datadogRum.init({
      applicationId: process.env.DATADOG_APPLICATION_ID,
      clientToken: process.env.DATADOG_CLIENT_TOKEN,
      site: "datadoghq.com",
      service: "datadogkrug",
      sessionSampleRate: 100,
      sessionReplaySampleRate: 100,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: "allow",
    });
  });
  return <>{children}</>;
};
