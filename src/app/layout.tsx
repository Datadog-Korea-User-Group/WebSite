import type { Metadata } from "next";

import { DefaultMetadata, DefaultOpenGraph } from "@/src/app/shared-metadata";
import { Footer } from "@/src/components/Footer";
import { Sidebar } from "@/src/components/Sidebar";
import { prefix } from "@/src/constants/prefix";

import "./globals.css";

export const metadata: Metadata = {
  ...DefaultMetadata,
  openGraph: DefaultOpenGraph,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0'
        />
        <link rel='apple-touch-icon' sizes='57x57' href={`${prefix}/apple-icon-57x57.png`} />
        <link rel='apple-touch-icon' sizes='60x60' href={`${prefix}/apple-icon-60x60.png`} />
        <link rel='apple-touch-icon' sizes='72x72' href={`${prefix}/apple-icon-72x72.png`} />
        <link rel='apple-touch-icon' sizes='76x76' href={`${prefix}/apple-icon-76x76.png`} />
        <link rel='apple-touch-icon' sizes='114x114' href={`${prefix}/apple-icon-114x114.png`} />
        <link rel='apple-touch-icon' sizes='120x120' href={`${prefix}/apple-icon-120x120.png`} />
        <link rel='apple-touch-icon' sizes='144x144' href={`${prefix}/apple-icon-144x144.png`} />
        <link rel='apple-touch-icon' sizes='152x152' href={`${prefix}/apple-icon-152x152.png`} />
        <link rel='apple-touch-icon' sizes='180x180' href={`${prefix}/apple-icon-180x180.png`} />
        <link rel='icon' type='image/png' sizes='192x192' href={`${prefix}/android-icon-192x192.png`} />
        <link rel='icon' type='image/png' sizes='32x32' href={`${prefix}/favicon-32x32.png`} />
        <link rel='icon' type='image/png' sizes='96x96' href={`${prefix}/favicon-96x96.png`} />
        <link rel='icon' type='image/png' sizes='16x16' href={`${prefix}/favicon-16x16.png`} />
        <link rel='manifest' href={`${prefix}/manifest.json`} crossOrigin='use-credentials' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content={`${prefix}/ms-icon-144x144.png`} />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body className='flex antialiased h-screen overflow-hidden bg-gray-100'>
        <Sidebar />
        <div className='lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto'>
          <div className='flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto'>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
