import { robotoMono } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import AOSProvider from "@/components/AOSProvider";

const whyChooseItems = [
  {
    id: 'experienced-ghostwriters',
    image: '/whoweare/Mask group (13).png',
    alt: 'Experienced Ghostwriters',
    title: 'Experienced Ghostwriters',
    description:
      'At Ink Founders, our ghostwriters are skilled in bringing stories to life with authenticity and depth. We understand that every author has a unique voice, so we carefully pair you with writers who align with your vision and capture your tone seamlessly.',
  },
  {
    id: 'privacy',
    image: '/whoweare/Mask group (14).png',
    alt: 'Privacy',
    title: 'Privacy',
    description:
      'Integrity is at the heart of our work. We prioritize originality and uphold strict confidentiality in every collaboration. Trust is the foundation of our process because great books begin with secure, respectful partnerships.',
  },
  {
    id: 'affordability',
    image: '/whoweare/Mask group (15).png',
    alt: 'Affordability',
    title: 'Affordability',
    description:
      'We believe in honest pricing and accessible services. With transparent rates, no hidden fees, and flexible payment options, we make high-quality ghostwriting affordable without compromising on excellence.',
  },
  {
    id: 'customer-satisfaction',
    image: '/whoweare/Mask group (16).png',
    alt: 'Customer Satisfaction',
    title: 'Customer Satisfaction',
    description:
      "Your vision matters, and so does your satisfaction. Our ghostwriters actively incorporate your feedback to ensure every detail aligns with your expectations. We're committed to refining your book until you're completely satisfied with the result.",
  },
  {
    id: 'dynamic-stories',
    image: '/whoweare/Mask group (17).png',
    alt: 'Dynamic Stories',
    title: 'Dynamic Stories',
    description:
      "At Ink Founders, we're passionate storytellers who blend creativity with craft. Our professional writers bring your world and characters to life, infusing each page with imagination, depth, and your unique vision.",
  },
  {
    id: 'support-24-7',
    image: '/whoweare/Mask group (18).png',
    alt: '24/7 Customer Support',
    title: '24/7 Customer Support',
    description:
      "At Ink Founders, you're never on your own. Every client is paired with a dedicated account manager who oversees your project and serves as your direct link to your ghostwriter, available anytime to answer questions, provide updates, and ensure a smooth publishing experience.",
  },
]

const WhyChoosePanda = () => {
  return (
    <AOSProvider>
      <section className="w-full bg-[#F6F5F3] flex justify-center items-center py-10">
        <div className="w-full max-w-[1300px] flex flex-col items-center">
          {/* Headings */}
          <h2 className="text-center text-[22px] md:text-[30px] font-semibold mb-5">
            <span className="text-[#1F1F1F]">Why Choose Ink Founders</span>
          </h2>

          <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-7">
            {whyChooseItems.map((item) => (
              <div
                key={item.id}
                data-aos="fade-down-right"
                className="flex flex-col items-start px-8 text-left"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={48}
                  height={48}
                  className="mb-3"
                />
                <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
                  {item.title}
                </h3>
                <p className={`text-[#444444] text-[12px] md:text-[15px] leading-tight ${robotoMono.className}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AOSProvider>
  )
}

export default WhyChoosePanda
