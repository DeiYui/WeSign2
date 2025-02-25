// pages/auth/login.tsx
import IframeComponent from "@/components/Chat/IframeComponent";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collect-data - Dictionary",
  description: "Collect-data page for We_sign",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function CollectDataPage() {
  return (
    <DefaultLayout>
      <IframeComponent />
    </DefaultLayout>
  );
}
