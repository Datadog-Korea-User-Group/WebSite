import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import React from "react";

import { JSDOM } from "jsdom";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const { path } = Object.fromEntries(searchParams);

    const url = new URL(
      process.env.NODE_ENV === "development" ? `http://localhost:3000${path}` : `https://datadogkrug.vercel.app${path}`,
    );

    const response = await fetch(url.toString());
    const html = await response.text();

    const dom = new JSDOM(html);
    const title = dom.window.document.querySelector("title")?.textContent || "No title";
    const description =
      dom.window.document.querySelector("meta[name='description']")?.getAttribute("content") || "No description";
    const keywords = (dom.window.document.querySelector("meta[name='keywords']")?.getAttribute("content") || "").split(
      ",",
    );
    const lastModified = dom.window.document.querySelector("time")?.getAttribute("datetime") || "";
    const thumbnail = dom.window.document.querySelector("img#thumbnail")?.getAttribute("src") || "";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            padding: "46px",
            backgroundImage: "linear-gradient(to top, #FF2978 0%, #8000FF 100%)",
            color: "white",
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              height: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ fontSize: "46px", fontWeight: "bold", paddingTop: "24px", whiteSpace: "pre-wrap" }}>
                {title}
              </h1>
              <p style={{ fontSize: "20px", opacity: 0.8, whiteSpace: "pre-wrap" }}>{description}</p>
              <div style={{ display: "flex", fontSize: "18px", opacity: 0.6 }}>
                {keywords.map((tag: string, i) => (
                  <div key={tag} style={{ display: "flex", marginRight: keywords.length === i + 1 ? "" : "10px" }}>
                    #{tag}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={
                    process.env.NODE_ENV === "development"
                      ? `http://localhost:3000/${thumbnail}`
                      : `https://datadogkrug.vercel.app/${thumbnail}`
                  }
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "10px",
                    marginRight: "16px",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: 20,
                    }}
                  >
                    <div style={{ fontSize: "32px", opacity: 0.8 }}>DatadogKRUG - Datadog 한국사용자모임</div>
                    <div style={{ fontSize: "20px", opacity: 0.8 }}>{url.href}</div>
                  </div>
                  {lastModified && <div style={{ fontSize: "20px", opacity: 0.8 }}>{lastModified}</div>}
                </div>
              </div>
            </div>
          </div>
          <img
            src={
              process.env.NODE_ENV === "development"
                ? `http://localhost:3000/images/logos/dd_icon_white.png`
                : `https://datadogkrug.vercel.app/images/logos/dd_icon_white.png`
            }
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              objectFit: "contain",
              objectPosition: "center",
              bottom: 50,
              right: 50,
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
