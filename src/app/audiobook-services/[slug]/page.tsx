import type { Metadata } from "next";
import React from 'react'
import { notFound } from "next/navigation";
import Hero from '../components/Hero'
import PartnersSection from "../../Home/OurPartner";
import NarrationOptions from '../components/NarrationOptions';
import ImageDesc from '../components/ImageDesc';
import Testimonials from '../../Home/Testimonials';
import GetInTouch from '../../Home/GetInTouch';
import { audiobookData } from '../data';
import { createCanonicalMetadata } from "@/lib/seo";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);

  return createCanonicalMetadata(`/audiobook-services/${slug}`);
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
      {/* <GetInTouch data={audiobook.contactData} /> This one was from ../components/ */} 
      <GetInTouch />
    </section>
  )
}

export default page
