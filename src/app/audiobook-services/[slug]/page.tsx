import React from 'react'
import Hero from '../components/Hero'
import PartnersSection from "../../Home/OurPartner";
import NarrationOptions from '../components/NarrationOptions';
import ImageDesc from '../components/ImageDesc';
import Testimonials from '../components/Testimonials';
import GetInTouch from '../components/GetInTouch';
import { audiobookData } from '../data';

interface PageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = await Promise.resolve(params);
  const audiobook = audiobookData.find(item => item.slug === slug);

  if (!audiobook) {
    return <div>Audiobook not found</div>;
  }

  return (
    <section>
      <Hero data={audiobook.hero} />
      <PartnersSection />
      <NarrationOptions data={audiobook.narration[0]} />
      <ImageDesc data={audiobook.imageDesc} />
      <Testimonials />
      <GetInTouch />
    </section>
  )
}

export default page