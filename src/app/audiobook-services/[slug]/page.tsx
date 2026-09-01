import type { Metadata } from "next";
import React from 'react'
import { notFound } from "next/navigation";
import Hero from '../components/Hero'
import PartnersSection from "../../Home/OurPartner";
import NarrationOptions from '../components/NarrationOptions';
import ImageDesc from '../components/ImageDesc';
import Testimonials from '../../Home/Testimonials';
import GetInTouch from '../components/GetInTouch';
import { audiobookData } from '../data';
import { createCanonicalMetadata, SOCIAL_IMAGE_URL } from "@/lib/seo";

interface PageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return audiobookData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const audiobook = audiobookData.find((item) => item.slug === slug);

  if (!audiobook) {
    return {};
  }

  return {
    title: audiobook.metaTitle,
    description: audiobook.metaDesc,
    ...createCanonicalMetadata(`/audiobook-services/${slug}`),
    openGraph: {
      title: audiobook.metaTitle,
      description: audiobook.metaDesc,
      url: `/audiobook-services/${slug}`,
      type: "website",
      images: [
        {
          url: SOCIAL_IMAGE_URL,
          width: 192,
          height: 87,
          alt: "Ink Founders logo",
        },
      ],
    },
    twitter: {
      title: audiobook.metaTitle,
      description: audiobook.metaDesc,
      card: "summary_large_image",
      images: [SOCIAL_IMAGE_URL],
    },
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = await Promise.resolve(params);
  const audiobook = audiobookData.find(item => item.slug === slug);

  if (!audiobook) {
    notFound();
  }

  return (
    <section>
      <Hero data={audiobook.hero} />
      <PartnersSection />
      <NarrationOptions data={audiobook.narration[0]} />
      <ImageDesc data={audiobook.imageDesc} />
      <Testimonials />
      <GetInTouch data={audiobook.contactData} />
    </section>
  )
}

export default page
