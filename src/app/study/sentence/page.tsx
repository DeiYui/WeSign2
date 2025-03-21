import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
import Vocabulary from "./Sentence";

export const metadata: Metadata = {
  title: "LearnSentence - We_sign",
  description: "LearnSentence page for We_sign",
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

const LearnVocabulary = () => {
  return (
    <DefaultLayout>
      <Vocabulary />
    </DefaultLayout>
  );
};

export default LearnVocabulary;
