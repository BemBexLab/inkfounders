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
      "Our ghostwriters know how to bring a story to life with authenticity and depth. Every author has a different voice, so we pair you with writers who genuinely match your tone and vision, not whoever's next in the queue.",
  },
  {
    id: 'privacy',
    image: '/whoweare/Mask group (14).png',
    alt: 'Privacy',
    title: 'Privacy',
    description:
      'Integrity is at the core of how we work. We protect originality and hold strict confidentiality on every project, because a good ghostwriting relationship starts with trust.',
  },
  {
    id: 'affordability',
    image: '/whoweare/Mask group (15).png',
    alt: 'Affordability',
    title: 'Affordability',
    description:
      'As an affordable self-publishing company for authors, we believe in honest pricing: transparent rates, no hidden fees, and flexible payment options, without cutting corners on quality.',
  },
  {
    id: 'customer-satisfaction',
    image: '/whoweare/Mask group (16).png',
    alt: 'Customer Satisfaction',
    title: 'Customer Satisfaction',
    description:
      "Your vision matters, and so does how you feel about the finished book. Our writers actively work with your feedback, and we stay on a project until you're genuinely satisfied with the result, not just signed off on paper.",
  },
  {
    id: 'dynamic-stories',
    image: '/whoweare/Mask group (17).png',
    alt: 'Dynamic Stories',
    title: 'Dynamic Stories',
    description:
      "We're storytellers first. Our writers bring your world and characters to life, adding imagination and depth while keeping your original vision front and center.",
  },
  {
    id: 'support-24-7',
    image: '/whoweare/Mask group (18).png',
    alt: '24/7 Customer Support',
    title: '24/7 Customer Support',
    description:
      "You're never left figuring things out on your own. Every client gets a dedicated account manager who oversees your project and connects you directly with your ghostwriter, available whenever you need updates or have questions.",
  },
]

const WhyChoosePanda = () => {
  return (
    <AOSProvider>
      <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 py-10 sm:px-6 md:px-8">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          {/* Headings */}
          <h2 className="mb-8 text-center text-[22px] font-semibold md:text-[30px]">
            <span className="text-[#1F1F1F]">Why Choose Ink Founders</span>
          </h2>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {whyChooseItems.map((item) => (
              <div
                key={item.id}
                data-aos="fade-up"
                className="mx-auto flex w-full max-w-[420px] flex-col items-center px-2 text-center sm:items-start sm:text-left lg:px-8"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={48}
                  height={48}
                  className="mb-3"
                />
                <h3 className="mb-2 text-[16px] font-semibold text-black md:text-[20px]">
                  {item.title}
                </h3>
                <p className={`text-[12px] text-[#444444] md:text-[15px] ${robotoMono.className}`}>
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
