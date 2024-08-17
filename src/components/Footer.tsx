"use client";

import React from "react";

export const Footer = () => {
  return (
    <div className='p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100'>
      <p className='font-semibold mb-2'>Datadog Korea User Group - Datadog 한국사용자모임</p>
      <p>Datadog Korea User Group은 독립적인 커뮤니티로서, 모든 활동은 Datadog과 관련이 없습니다.</p>
      <p>Datadog Korea User Group is an independent community, and all activities are not related to Datadog.</p>

      <p className='mt-2'>Copyright © DatadogKRUG(Datadog Korea User Group) All Rights Reserved.</p>
      <p className=''>
        Contact :{" "}
        <a className='hover:underline' href='mailto:datadogkrug@gmail.com'>
          datadogkrug@gmail.com
        </a>
      </p>
    </div>
  );
};
