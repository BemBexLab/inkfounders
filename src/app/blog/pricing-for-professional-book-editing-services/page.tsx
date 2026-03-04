"use client";
import React, { useState } from "react";
import {
  ArrowLeft,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Blog2 = () => {
  const router = useRouter();

  // Image arrays for sliders (empty as per original structure)
  const editingImages = ["/blog/blog_2.webp"];
  const coverDesignImages: string[] = [];
  const printingImages: string[] = [];
  const childrensBookImages: string[] = [];

  // Slider state for each section
  const [editingSliderIndex, setEditingSliderIndex] = useState(0);
  const [coverSliderIndex, setCoverSliderIndex] = useState(0);
  const [printingSliderIndex, setPrintingSliderIndex] = useState(0);
  const [childrensSliderIndex, setChildrensSliderIndex] = useState(0);

  const nextSlide = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    currentIndex: number,
    arrayLength: number,
  ) => {
    setter((currentIndex + 1) % arrayLength);
  };

  const prevSlide = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    currentIndex: number,
    arrayLength: number,
  ) => {
    setter((currentIndex - 1 + arrayLength) % arrayLength);
  };

  return (
      <div className="bg-[#F5F5DC] font-sans mt-30 text-gray-800">
        {/* Breadcrumb / Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <a
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-[#D4D939] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </a>
        </div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Column */}
            <article className="lg:col-span-8 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              {/* Header */}
              <header className="mb-10 border-b border-gray-100 pb-8">
                <span className="inline-block bg-[#D4D939] text-black px-3 py-1 rounded-full text-sm font-bold mb-4">
                  Publishing Guide
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                  Pricing for Professional Book Editing Services (2026 Guide)
                </h1>
                <div className="mb-12">
                  <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-[#D4D939] bg-gray-100">
                    <div className="relative h-96">
                      <img
                        src={editingImages[editingSliderIndex]}
                        alt={`Professional book editing ${editingSliderIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Dots Indicator */}
                    {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {editingImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setEditingSliderIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === editingSliderIndex
                              ? "bg-[#D4D939]"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div> */}
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm space-x-4">
                  <span>Updated: 2026</span>
                  <span>•</span>
                  <span>10 min read</span>
                </div>
              </header>

              {/* Intro Content */}
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-base leading-relaxed mb-6">
                  When you're planning to publish a book, one of the first
                  questions you'll face is: how much will editing cost? The
                  answer varies based on several factors, including the type of
                  editing, word count, the editor's experience, and the
                  complexity of the project. In this guide, we'll break down the
                  costs of <b><a href="/publishing-services" className="text-blue-500 hover:text-blue-800 hover:underline">professional book editing services</a></b> in simple terms.
                </p>
                <p className="text-base mb-6">
                  We'll cover the price per word for book editing, the cost of
                  developmental editing, and how much copy editing typically
                  costs.
                </p>

                {/* Why Professional Book Editing Is Worth the Investment */}
                <h2 className="text-3xl font-bold text-black mt-12 mb-6">
                  Why Professional Book Editing Is Worth the Investment
                </h2>
                <p className="text-base mb-4">
                  Before we talk about prices, let's understand why editing
                  matters.
                </p>
                <p className="text-base mb-4">Professional editing improves:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 list-none pl-0">
                  {[
                    "Story structure",
                    "Grammar and spelling",
                    "Clarity and flow",
                    "Character development",
                    "Consistency",
                    "Reader experience",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#D4D939] mr-3 flex-shrink-0" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base mb-4">
                  Even bestselling authors use professional editors. Platforms
                  like Amazon KDP and IngramSpark have made publishing easier
                  but quality editing is what makes a book sell.
                </p>
                <div className="bg-gray-50 border-l-4 border-[#D4D939] p-6 my-8 rounded-r-lg">
                  <p className="font-bold text-base text-black mb-2">
                    Poor editing leads to:
                  </p>
                  <ul className="space-y-1 text-red-600">
                    <li className="text-base">• Bad reviews</li>
                    <li className="text-base">• Low ratings</li>
                    <li className="text-base">• Refund requests</li>
                    <li className="text-base">• Weak sales</li>
                  </ul>
                </div>
                <p className="mb-8 font-bold text-base">
                  Editing is not a cost, it is an investment in your book's
                  success.
                </p>

                {/* How Much Does Editing a Book Cost in 2026? */}
                <h2 className="text-3xl font-bold text-black mt-12 mb-6">
                  How Much Does Editing a Book Cost in 2026?
                </h2>
                <p className="text-base mb-4">
                  Professional book editing costs between $0.01 and $0.08 per
                  word depending on the editing type.
                </p>
                <p className="text-base mb-4">
                  For a 70,000-word book, you can expect:
                </p>

                {/* Cost Breakdown Table */}
                <div className="overflow-x-auto mb-10">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 font-bold text-black border-b-2 border-gray-200">
                          Editing Type
                        </th>
                        <th className="p-4 font-bold text-black border-b-2 border-gray-200">
                          Cost Per Word
                        </th>
                        <th className="p-4 font-bold text-black border-b-2 border-gray-200">
                          Estimated Total Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4">Developmental Editing</td>
                        <td className="p-4 font-medium">$0.03 – $0.08</td>
                        <td className="p-4 font-medium">$2,100 – $5,600</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4">Copy Editing</td>
                        <td className="p-4 font-medium">$0.015 – $0.04</td>
                        <td className="p-4 font-medium">$1,050 – $2,800</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4">Proofreading</td>
                        <td className="p-4 font-medium">$0.01 – $0.02</td>
                        <td className="p-4 font-medium">$700 – $1,400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-center text-gray-500 italic mb-12">
                  Now let's break each one down clearly.
                </p>

                {/* Section 1: Developmental Editing Cost */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      1
                    </span>
                    Developmental Editing Cost
                  </h3>
                  <p className="text-base mb-4">
                    Developmental editing is the most detailed and highest-level
                    editing.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
                    <h4 className="font-bold text-lg mb-2">What It Covers:</h4>
                    <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">
                      <li className="text-base">Plot structure</li>
                      <li className="text-base">Story flow</li>
                      <li className="text-base">Character arcs</li>
                      <li className="text-base">Pacing issues</li>
                      <li className="text-base">Chapter organization</li>
                      <li className="text-base">Big-picture feedback</li>
                    </ul>
                  </div>
                  <p className="text-base mb-4">
                    If your book is fiction, this is where editors fix plot
                    holes and improve storytelling.
                  </p>
                  <p className="text-base mb-4">
                    If your book is non-fiction, they improve clarity,
                    structure, and logical flow.
                  </p>
                  <div className="bg-[#D4D939] p-4 rounded-lg mb-4">
                    <p className="font-bold text-base text-black">
                      Developmental Editing Cost Per Word
                    </p>
                    <p className="text-base text-black">
                      $0.03 to $0.08 per word
                    </p>
                    <p className="text-base text-black">
                      $40 to $100 per hour (if hourly)
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold text-base mb-2">Example Cost</p>
                    <p className="text-base">For a 60,000-word manuscript:</p>
                    <p className="text-base font-bold text-[#D4D939]">
                      $1,800 to $4,800
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold text-base">Why is it expensive?</p>
                    <p className="text-base">
                      Because it requires deep reading, analysis, and detailed
                      feedback reports.
                    </p>
                  </div>
                </div>

                {/* Image Slider After Developmental Editing */}
                <div className="mb-12">
                  <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-[#D4D939] bg-gray-100">
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {editingImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setEditingSliderIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === editingSliderIndex
                              ? "bg-[#D4D939]"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 2: Copy Editing Cost */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      2
                    </span>
                    Copy Editing Cost
                  </h3>
                  <p className="text-base mb-4">
                    Copy editing focuses on sentence-level improvements.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
                    <h4 className="font-bold text-lg mb-2">What It Covers:</h4>
                    <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">
                      <li className="text-base">Grammar</li>
                      <li className="text-base">Punctuation</li>
                      <li className="text-base">Sentence clarity</li>
                      <li className="text-base">Word choice</li>
                      <li className="text-base">Consistency</li>
                      <li className="text-base">Tone</li>
                    </ul>
                  </div>
                  <p className="text-base mb-4">
                    This is the stage where your book starts sounding
                    professional.
                  </p>
                  <div className="bg-[#D4D939] p-4 rounded-lg mb-4">
                    <p className="font-bold text-base text-black">
                      Copy Editing Cost Per Word
                    </p>
                    <p className="text-base text-black">
                      $0.015 to $0.04 per word
                    </p>
                    <p className="text-base text-black">
                      $30 to $60 per hour
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold text-base mb-2">Example Cost</p>
                    <p className="text-base">For a 70,000-word book:</p>
                    <p className="text-base font-bold text-[#D4D939]">
                      $1,050 to $2,800
                    </p>
                  </div>
                  <p className="mt-4 text-base">
                    Copy editing is essential before publishing on platforms
                    like Barnes & Noble Press.
                  </p>
                </div>

                {/* Image Slider After Copy Editing */}
                <div className="mb-12">
                  <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-[#D4D939] bg-gray-100">
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {coverDesignImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCoverSliderIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === coverSliderIndex
                              ? "bg-[#D4D939]"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3: Proofreading Cost */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      3
                    </span>
                    Proofreading Cost
                  </h3>
                  <p className="text-base mb-4">Proofreading is the final polish.</p>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
                    <h4 className="font-bold text-lg mb-2">What It Covers:</h4>
                    <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">
                      <li className="text-base">Typographical errors</li>
                      <li className="text-base">Minor grammar mistakes</li>
                      <li className="text-base">Formatting issues</li>
                      <li className="text-base">Missing words</li>
                    </ul>
                  </div>
                  <div className="bg-[#D4D939] p-4 rounded-lg mb-4">
                    <p className="font-bold text-base text-black">
                      Proofreading Cost Per Word
                    </p>
                    <p className="text-base text-black">
                      $0.01 to $0.02 per word
                    </p>
                    <p className="text-base text-black">
                      $25 to $45 per hour
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold text-base mb-2">Example Cost</p>
                    <p className="text-base">For 80,000 words:</p>
                    <p className="text-base font-bold text-[#D4D939]">
                      $800 to $1,600
                    </p>
                  </div>
                  <p className="mt-4 font-bold text-base">
                    Proofreading should always be the final step before
                    publishing.
                  </p>
                </div>

                {/* Section 4: Book Editing Cost Per Word vs Per Page vs Per Hour */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      4
                    </span>
                    Book Editing Cost Per Word vs Per Page vs Per Hour
                  </h3>
                  <p className="text-base mb-4">Editors may charge:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      "Per word (most common)",
                      "Per page (250 words average)",
                      "Per hour",
                      "Flat project fee",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-[#D4D939] flex-shrink-0" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 border-l-4 border-[#D4D939] p-6 rounded-r-lg">
                    <p className="font-bold text-base mb-2">
                      Why Per Word Pricing Is Better
                    </p>
                    <ul className="space-y-1">
                      <li className="text-base">• Clear budget planning</li>
                      <li className="text-base">• No hidden surprises</li>
                      <li className="text-base">• Fair for both parties</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5: Factors That Affect Editing Costs */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      5
                    </span>
                    Factors That Affect Editing Costs
                  </h3>
                  <p className="text-base mb-4">
                    Not every book costs the same. Here are the key factors:
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        num: "1",
                        title: "Word Count",
                        desc: "More words = higher total cost.",
                      },
                      {
                        num: "2",
                        title: "Editing Level Needed",
                        desc: "Heavy editing costs more than light editing.",
                      },
                      {
                        num: "3",
                        title: "Genre",
                        desc: "Technical books, academic writing, and fantasy novels often cost more.",
                      },
                      {
                        num: "4",
                        title: "Editor Experience",
                        desc: "Experienced editors charge more but provide better results.",
                      },
                      {
                        num: "5",
                        title: "Deadline",
                        desc: "Urgent projects usually include rush fees.",
                      },
                    ].map((factor) => (
                      <div
                        key={factor.num}
                        className="border border-gray-200 rounded-xl p-4"
                      >
                        <p className="font-bold text-base">
                          <span className="bg-[#D4D939] text-black w-6 h-6 rounded-full inline-flex items-center justify-center mr-2 text-xs">
                            {factor.num}
                          </span>
                          {factor.title}
                        </p>
                        <p className="text-gray-600 mt-1 text-base">
                          {factor.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 6: Average Editing Cost by Book Type */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      6
                    </span>
                    Average Editing Cost by Book Type
                  </h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 font-bold text-black border-b-2 border-gray-200">
                            Book Type
                          </th>
                          <th className="p-4 font-bold text-black border-b-2 border-gray-200">
                            Average Total Editing Cost
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-4">50,000-word novel</td>
                          <td className="p-4 font-medium">$1,000 – $3,500</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-4">70,000-word fiction</td>
                          <td className="p-4 font-medium">$1,500 – $4,500</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-4">100,000-word fantasy</td>
                          <td className="p-4 font-medium">$3,000 – $7,000</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4">40,000-word non-fiction</td>
                          <td className="p-4 font-medium">$800 – $2,500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 7: Can You Edit Your Book Yourself? */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      7
                    </span>
                    Can You Edit Your Book Yourself?
                  </h3>
                  <p className="text-base mb-4">
                    You can self-edit. But here's the honest truth:
                  </p>
                  <p className="mb-4 font-bold text-base">
                    Writers are too close to their own work.
                  </p>
                  <p className="text-base mb-4">
                    Even professional authors use editors from organizations
                    like the Editorial Freelancers Association.
                  </p>
                  <div className="bg-gray-50 border-l-4 border-[#D4D939] p-6 rounded-r-lg">
                    <p className="text-base">
                      Self-editing tools help, but they do not replace
                      professional human editing.
                    </p>
                  </div>
                </div>

                {/* Section 8: How to Reduce Book Editing Costs */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      8
                    </span>
                    How to Reduce Book Editing Costs
                  </h3>
                  <p className="text-base mb-4">
                    If your budget is tight, here are smart tips:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="font-bold text-base">Self-Edit First</p>
                      <p className="text-base">
                        Fix basic grammar and structure before hiring an editor.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="font-bold text-base">Hire for One Stage Only</p>
                      <p className="text-base">
                        If your book structure is strong, skip developmental
                        editing.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="font-bold text-base">Request a Sample Edit</p>
                      <p className="text-base">
                        Many editors offer free 1,000-word samples.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="font-bold text-base">Compare Quotes</p>
                      <p className="text-base">
                        Get at least 3 quotes before choosing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 9: Freelance Editor vs Editing Agency */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      9
                    </span>
                    Freelance Editor vs Editing Agency
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3">
                        Freelance Editor
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />{" "}
                          <span className="text-base">Lower cost</span>
                        </li>
                        <li className="flex items-center text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />{" "}
                          <span className="text-base">Direct communication</span>
                        </li>
                        <li className="flex items-center text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />{" "}
                          <span className="text-base">Flexible pricing</span>
                        </li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3">Editing Agency</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-green-600">
                          {/* <span className="mr-2">•</span>{" "} */}
                          <CheckCircle className="w-4 h-4 mr-2" />{" "}
                          <span className="text-base">Higher cost</span>
                        </li>
                        <li className="flex items-center text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />{" "}
                          <span className="text-base">Structured process</span>
                        </li>
                        <li className="flex items-center text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />{" "}
                          <span className="text-base">Premium services</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-base">
                    Platforms like Reedsy connect authors with vetted
                    professional editors.
                  </p>
                </div>

                {/* Section 10: Hidden Costs to Consider */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      10
                    </span>
                    Hidden Costs to Consider
                  </h3>
                  <p className="text-base mb-4">
                    When calculating how much editing a book costs, also
                    consider:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {[
                      "Formatting",
                      "Cover design",
                      "ISBN purchase",
                      "Book marketing",
                      "Beta readers",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <span className="w-2 h-2 bg-[#D4D939] rounded-full mr-3"></span>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-bold text-base">
                    Editing is one part of your total publishing budget.
                  </p>
                </div>

                {/* Section 11: Is Professional Editing Really Necessary? */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      11
                    </span>
                    Is Professional Editing Really Necessary?
                  </h3>
                  <p className="mb-4 text-base font-bold text-green-600">Yes</p>
                  <p className="text-base mb-4">especially if you want:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Better Amazon reviews",
                      "Higher credibility",
                      "Traditional publishing acceptance",
                      "Stronger reader trust",
                    ].map((item) => (
                      <li key={item} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#D4D939] mr-3 flex-shrink-0" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-bold text-base">
                    Readers quickly notice grammar mistakes. Bad editing damages
                    the author's reputation.
                  </p>
                </div>

                {/* Section 12: Frequently Asked Questions */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                      12
                    </span>
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-bold text-base mb-2">
                        How much does it cost to edit a 100,000-word book?
                      </p>
                      <p className="text-base">
                        Between $2,000 and $8,000 depending on editing type.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-base mb-2">
                        What is the average book editing cost per word?
                      </p>
                      <p className="text-base">
                        Between $0.01 and $0.08 per word.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-base mb-2">
                        Is developmental editing more expensive than copy
                        editing?
                      </p>
                      <p className="text-base">
                        Yes. Developmental editing costs more because it focuses
                        on structure and big-picture improvements.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-base mb-2">
                        Can I publish without editing?
                      </p>
                      <p className="text-base">
                        Technically yes. But it strongly reduces quality and
                        sales potential.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Ink Founders Section */}
                <div className="bg-black text-white p-8 md:p-12 rounded-2xl mb-12 relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D4D939]">
                      Ink Founders - Complete Self Publishing Solutions
                    </h2>
                    <p className="text-base mb-8">
                      Now the important part. Ink Founders provides complete
                      publishing services under one system.
                    </p>
                    <p className="font-bold text-base mb-4">
                      We handle everything:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {[
                        "Developmental Editing",
                        "Copy Editing",
                        "Proofreading",
                        "Cover Design",
                        "Interior Formatting",
                        "Kindle Setup",
                        "Paperback & Hardcover setup",
                        "ISBN guidance",
                        "Marketing strategy",
                        "Book launch support",
                      ].map((item) => (
                        <div key={item} className="flex items-center">
                          <div className="w-2 h-2 bg-[#D4D939] rounded-full mr-3"></div>
                          <span className="text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-base">
                      You do not manage multiple freelancers. You work with one
                      professional team.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-black mb-8">
                  Why Ink Founders Can Be Better for You
                </h2>
                <div className="space-y-8">
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-black mb-3">
                      1. One Structured System
                    </h3>
                    <p className="mb-2 text-base">Freelancers work separately.</p>
                    <p className="font-bold mb-2 text-base">
                      We work as one team.
                    </p>
                    <p className="text-base">
                      Editor, designer, formatter, and marketing strategist
                      coordinate together. This improves quality.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-black mb-3">
                      2. Cost Control
                    </h3>
                    <p className="mb-2 text-base">
                      If you hire individually, your total cost may reach:
                    </p>
                    <p className="text-base font-bold text-red-600 mb-4">
                      $5,000 – $10,000+
                    </p>
                    <p className="text-base">
                      We structure services to avoid unnecessary spending. You
                      invest where it matters.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-black mb-3">
                      3. Professional Platform Setup
                    </h3>
                    <p className="mb-2 text-base">We publish correctly on:</p>
                    <div className="flex gap-4 mb-4 font-bold">
                      <span className="bg-gray-100 px-3 py-1 rounded">
                        Amazon KDP
                      </span>
                      <span className="bg-gray-100 px-3 py-1 rounded">
                        IngramSpark
                      </span>
                    </div>
                    <p className="mb-2 text-base">We optimize:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="text-base">• Categories</li>
                      <li className="text-base">• Keywords</li>
                      <li className="text-base">• Book description</li>
                      <li className="text-base">• Pricing strategy</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-black mb-3">
                      4. Marketing Execution
                    </h3>
                    <p className="mb-4 text-base">
                      Many authors watch tutorials but fail to implement them.
                    </p>
                    <p className="font-bold mb-2 text-base">We help with:</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      <li className="text-base">• Amazon Ads setup</li>
                      <li className="text-base">• Launch strategy</li>
                      <li className="text-base">• Email marketing</li>
                      <li className="text-base">• Review generation strategy</li>
                    </ul>
                    <p className="mt-4 font-bold text-[#D4D939] text-base">
                      We focus on results.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Sticky CTA */}
              <div className="sticky top-8 space-y-8">
                <div className="bg-[#D4D939] rounded-xl p-8 text-center shadow-lg">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Ready to Publish?
                  </h3>
                  <p className="text-base text-black mb-6 opacity-90">
                    Get a custom quote for your book project today.
                  </p>
                  <button
                    onClick={() => router.push("/contactus")}
                    className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                  >
                    Request a Quote
                  </button>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-black mb-4 border-b pb-2">
                    Contact Us
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-yellow-100 p-2 rounded-full mr-3">
                        <svg
                          className="w-5 h-5 text-[#D4D939]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-black">Phone</p>
                        <p className="text-sm text-gray-600">
                          +1 (786) 524-4161
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-yellow-100 p-2 rounded-full mr-3">
                        <svg
                          className="w-5 h-5 text-[#D4D939]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-black">Email</p>
                        <p className="text-sm text-gray-600">
                          info@inkfounders.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-yellow-100 p-2 rounded-full mr-3">
                        <svg
                          className="w-5 h-5 text-[#D4D939]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-black">Location</p>
                        <p className="text-sm text-gray-600">
                          Miami Beach, FL 33139, USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
  );
};

export default Blog2;
