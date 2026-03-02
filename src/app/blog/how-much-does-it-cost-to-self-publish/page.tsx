"use client";

import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BlogOne: React.FC = () => {
  const router = useRouter();
  const editingImages = [
    "/blog/blog_1.webp",
  ];

  const coverDesignImages = [
  ];

  const printingImages = [
  ];

  const childrensBookImages: string[] = [
  ];

  // Slider state for each section
  const [editingSliderIndex, setEditingSliderIndex] = useState(0);
  const [coverSliderIndex, setCoverSliderIndex] = useState(0);
  const [printingSliderIndex, setPrintingSliderIndex] = useState(0);
  const [childrensSliderIndex, setChildrensSliderIndex] = useState(0);

  const nextSlide = (setter: React.Dispatch<React.SetStateAction<number>>, currentIndex: number, arrayLength: number) => {
    setter((currentIndex + 1) % arrayLength);
  };

  const prevSlide = (setter: React.Dispatch<React.SetStateAction<number>>, currentIndex: number, arrayLength: number) => {
    setter((currentIndex - 1 + arrayLength) % arrayLength);
  };

  return (
    <div className="bg-[#F5F5DC] font-sans mt-30 text-gray-800">
      
      {/* Breadcrumb / Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a href="/blog" className="inline-flex items-center text-gray-600 hover:text-[#D4D939] transition-colors mb-8">
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
                How Much Does It Cost to Self Publish a Book? Real Costs Explained
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
                  
                  {/* Slider Controls */}
                  {/* <button 
                    onClick={() => prevSlide(setEditingSliderIndex, editingSliderIndex, editingImages.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => nextSlide(setEditingSliderIndex, editingSliderIndex, editingImages.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button> */}

                  {/* Dots Indicator */}
                  {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {editingImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setEditingSliderIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === editingSliderIndex ? 'bg-[#D4D939]' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div> */}
                  {/* <div className="absolute bottom-12 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium text-center">Professional editing ensures your manuscript is polished</p>
                  </div> */}
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <span>Updated: 2025</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </header>

            {/* Intro Content */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                If you are planning to publish your book, you probably ask:
                <span className="block font-bold text-black mt-2">"How much does it cost to self publish a book?"</span>
              </p>
              
              <div className="bg-gray-50 border-l-4 border-[#D4D939] p-6 my-8 rounded-r-lg">
                <p className="font-bold text-lg text-black mb-2">The honest answer:</p>
                <p className="mb-2">You can publish for <span className="font-bold text-green-600">$0</span>, or you can invest <span className="font-bold text-red-600">$10,000 or more</span>.</p>
              </div>

              <p className="mb-6">The total cost depends on:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 list-none pl-0">
                {['Editing quality', 'Cover design', 'Formatting', 'Printing type', 'Marketing strategy'].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#D4D939] mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-8">
                In this complete guide, you will learn the real numbers. You will also understand how <strong><a className='text-blue-800 hover:underline' href="/">Ink Founders</a></strong> provides complete publishing services under one system.
                <br /><br />
                Let's break everything step by step.
              </p>

              <h2 className="text-3xl font-bold text-black mt-12 mb-6">How Much Does Self Publishing a Book Cost?</h2>
              <p className="mb-4">On average, most serious authors invest:</p>
              <p className="text-2xl font-bold text-[#D4D939] mb-8">$1,500 to $5,000</p>

              {/* Cost Breakdown Table */}
              <div className="overflow-x-auto mb-10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 font-bold text-black border-b-2 border-gray-200">Service</th>
                      <th className="p-4 font-bold text-black border-b-2 border-gray-200">Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4">Editing</td>
                      <td className="p-4 font-medium">$800 – $4,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4">Cover Design</td>
                      <td className="p-4 font-medium">$300 – $800</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4">Formatting</td>
                      <td className="p-4 font-medium">$200 – $600</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4">ISBN</td>
                      <td className="p-4 font-medium">$0 – $295</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">Marketing</td>
                      <td className="p-4 font-medium">$500 – $5,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center text-gray-500 italic mb-12">Now let's explain each part clearly.</p>

              {/* Section 1 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                  Editing Cost
                </h3>
                <p className="mb-4">Editing takes the biggest part of your budget.</p>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-lg mb-2">Developmental Editing</h4>
                    <p className="mb-2">This editing improves:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">
                      <li>Story structure</li>
                      <li>Character development</li>
                      <li>Flow and clarity</li>
                    </ul>
                    <p className="font-bold text-sm">Cost: $0.03–$0.08 per word</p>
                    <p className="text-sm text-gray-500">80,000-word novel: $2,400–$6,400</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-lg mb-2">Copy Editing</h4>
                    <p className="mb-2">This editing fixes:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">
                      <li>Grammar</li>
                      <li>Sentence clarity</li>
                      <li>Word choice</li>
                    </ul>
                    <p className="font-bold text-sm">Cost: $0.02–$0.05 per word</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-lg mb-2">Proofreading</h4>
                    <p className="mb-2">Proofreading removes final small mistakes before publishing.</p>
                    <p className="font-bold text-sm mb-2">Cost: $0.01–$0.03 per word</p>
                    <p className="text-sm text-gray-500">Many authors hire editors from platforms like Reedsy, Fiverr, or Upwork. Quality varies. Results are not always consistent.</p>
                  </div>
                </div>
              </div>

              {/* Image Slider 1: After Editing Cost */}
              <div className="mb-12">
                <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-[#D4D939] bg-gray-100">
                  {/* <div className="relative h-96">
                    <img 
                      src={editingImages[editingSliderIndex]} 
                      alt={`Professional book editing ${editingSliderIndex + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  
                  {/* Slider Controls */}
                  {/* <button 
                    onClick={() => prevSlide(setEditingSliderIndex, editingSliderIndex, editingImages.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => nextSlide(setEditingSliderIndex, editingSliderIndex, editingImages.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button> */}

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {editingImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setEditingSliderIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === editingSliderIndex ? 'bg-[#D4D939]' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* <div className="absolute bottom-12 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium text-center">Professional editing ensures your manuscript is polished</p>
                  </div> */}
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  Book Cover Design Cost
                </h3>
                <p className="mb-4 font-medium">Your cover controls your sales.</p>
                <p className="mb-4">You can design using Canva.</p>
                <p className="bg-gray-100 inline-block px-3 py-1 rounded text-sm font-bold mb-4">Cost: Free – $15/month</p>
                <p className="mb-2">But professional cover design costs:</p>
                <p className="text-2xl font-bold text-black mb-4">$300 – $800</p>
                <p className="text-gray-600">Professional covers follow market trends and improve conversion.</p>
              </div>

              {/* Image Slider 2: After Book Cover Design Cost */}
              <div className="mb-12">
                <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-[#D4D939] bg-gray-100">
                  {/* <div className="relative h-96">
                    <img 
                      src={coverDesignImages[coverSliderIndex]} 
                      alt={`Professional book cover design ${coverSliderIndex + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  
                  {/* Slider Controls */}
                  {/* <button 
                    onClick={() => prevSlide(setCoverSliderIndex, coverSliderIndex, coverDesignImages.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => nextSlide(setCoverSliderIndex, coverSliderIndex, coverDesignImages.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button> */}

                  {/* Dots Indicator */}
                  {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {coverDesignImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCoverSliderIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === coverSliderIndex ? 'bg-[#D4D939]' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute bottom-12 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium text-center">Eye-catching covers that attract readers and boost sales</p>
                  </div> */}
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                  Formatting Cost (Interior Design)
                </h3>
                <p className="mb-4">Formatting prepares your book for ebook and print.</p>
                <p className="mb-4">Tools used by professionals include:</p>
                <ul className="grid grid-cols-2 gap-2 mb-4 font-medium">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-[#D4D939]" /> Adobe InDesign</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-[#D4D939]" /> Vellum</li>
                </ul>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex-1">
                    <span className="block text-xs text-gray-500 uppercase font-bold">DIY</span>
                    <span className="text-xl font-bold">$0</span>
                  </div>
                  <div className="bg-[#D4D939] p-4 rounded-lg flex-1">
                    <span className="block text-xs text-black uppercase font-bold opacity-70">Professional</span>
                    <span className="text-xl font-bold text-black">$200 – $600</span>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                  Printing and Production Cost
                </h3>
                <p className="mb-4">There are two options:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-3">Print on Demand</h4>
                    <p className="text-sm text-gray-500 mb-2">Platforms like:</p>
                    <ul className="mb-4 space-y-1 font-medium text-sm">
                      <li>• Amazon KDP</li>
                      <li>• IngramSpark</li>
                      <li>• Lulu</li>
                    </ul>
                    <p className="text-sm mb-2">You pay no upfront cost. Printing cost deducts from royalties.</p>
                    <p className="font-bold text-sm bg-gray-100 p-2 rounded">Example: 300-page paperback printing cost = $4–$6 per copy.</p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-3">Offset Printing</h4>
                    <p className="text-sm mb-2">You print 1,000+ copies in bulk.</p>
                    <p className="font-bold text-lg text-black mb-2">Cost: $2,000 – $5,000 upfront.</p>
                    <p className="text-red-600 text-sm font-medium">Risk is higher.</p>
                  </div>
                </div>
              </div>

              {/* Image Slider 3: After Printing and Production Cost */}
              <div className="mb-12">
                <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-[#D4D939] bg-gray-100">
                  {/* <div className="relative h-96">
                    <img 
                      src={printingImages[printingSliderIndex]} 
                      alt={`Book printing and production ${printingSliderIndex + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  
                  {/* Slider Controls */}
                  {/* <button 
                    onClick={() => prevSlide(setPrintingSliderIndex, printingSliderIndex, printingImages.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => nextSlide(setPrintingSliderIndex, printingSliderIndex, printingImages.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button> */}

                  {/* Dots Indicator */}
                  {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {printingImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setPrintingSliderIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === printingSliderIndex ? 'bg-[#D4D939]' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div> */}

                  {/* <div className="absolute bottom-12 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium text-center">High-quality printing options for both digital and physical books</p>
                  </div> */}
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                  Cost to Self Publish on Kindle
                </h3>
                <p className="mb-4">Does it cost money to self publish on Kindle?</p>
                <p className="text-xl font-bold text-green-600 mb-4">No.</p>
                <p className="mb-4">Amazon KDP allows free publishing. You only pay for services like editing or cover design.</p>
                <p className="font-bold mb-2">Royalty options:</p>
                <div className="flex gap-4">
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold">35%</span>
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold">70%</span>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                  Cost of Self Publishing a Novel
                </h3>
                <p className="mb-4">For an 80,000-word novel:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex justify-between border-b border-gray-100 py-2"><span>Editing:</span> <span className="font-bold">$2,000 – $4,000</span></li>
                  <li className="flex justify-between border-b border-gray-100 py-2"><span>Cover:</span> <span className="font-bold">$400</span></li>
                  <li className="flex justify-between border-b border-gray-100 py-2"><span>Formatting:</span> <span className="font-bold">$300</span></li>
                  <li className="flex justify-between border-b border-gray-100 py-2"><span>Marketing:</span> <span className="font-bold">$500 – $3,000</span></li>
                  <li className="flex justify-between py-2 text-lg"><span>Total:</span> <span className="font-bold text-[#D4D939]">$3,000 – $7,000</span></li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <span className="bg-[#D4D939] text-black w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">7</span>
                  Cost of Self Publishing a Children's Book
                </h3>
                <p className="mb-4">Children's books cost more because of illustrations.</p>
                <p className="mb-2 font-bold">Illustrations cost:</p>
                <p className="text-lg mb-4">$50 – $300 per page</p>
                
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#D4D939]">
                  <p className="font-bold mb-2">32-page picture book:</p>
                  <p className="mb-4">$1,500 – $8,000</p>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="font-bold text-lg">Total cost: $3,000 – $10,000</p>
                  </div>
                </div>
              </div>

              {/* Image Slider 4: After Children's Book Section */}
              <div className="mb-12">
                <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-[#D4D939] bg-gray-100">
                  {/* <div className="relative h-96">
                    <img 
                      src={childrensBookImages[childrensSliderIndex]} 
                      alt={`Children's book illustration ${childrensSliderIndex + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  
                  {/* Slider Controls */}
                  {/* <button 
                    onClick={() => prevSlide(setChildrensSliderIndex, childrensSliderIndex, childrensBookImages.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button> */}
                  {/* <button 
                    onClick={() => nextSlide(setChildrensSliderIndex, childrensSliderIndex, childrensBookImages.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button> */}

                  {/* Dots Indicator */}
                  {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {childrensBookImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setChildrensSliderIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === childrensSliderIndex ? 'bg-[#D4D939]' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div> */}

                  {/* <div className="absolute bottom-12 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium text-center">Engaging illustrations that captivate young readers</p>
                  </div> */}
                </div>
              </div>

              <hr className="my-12 border-gray-200" />

              <h2 className="text-3xl font-bold text-black mb-6">Is It Cheaper to Self Publish?</h2>
              <p className="text-xl font-bold text-green-600 mb-6">Yes.</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="font-bold mb-3 text-gray-500 uppercase text-sm">Traditional Publishing</h4>
                  <p className="mb-4">Costs the author $0 upfront.</p>
                  <p className="mb-2">But:</p>
                  <ul className="space-y-2 text-red-600">
                    <li className="flex items-center"><span className="mr-2">✕</span> You earn lower royalties</li>
                    <li className="flex items-center"><span className="mr-2">✕</span> You lose creative control</li>
                    <li className="flex items-center"><span className="mr-2">✕</span> You wait longer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-gray-500 uppercase text-sm">Self Publishing</h4>
                  <p className="mb-2">Self publishing gives:</p>
                  <ul className="space-y-2 text-green-700 font-medium">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Higher royalties</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Full control</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Faster publishing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-xl mb-12">
                <h3 className="text-xl font-bold text-black mb-4">Why Many Authors Still Struggle</h3>
                <p className="mb-4">Many authors fail because they:</p>
                <ul className="grid md:grid-cols-2 gap-2 mb-6">
                  <li>• Hire random freelancers</li>
                  <li>• Skip marketing</li>
                  <li>• Design weak covers</li>
                  <li>• Publish without strategy</li>
                </ul>
                <p className="font-bold text-lg">Publishing is not just uploading a file. You need structure.</p>
              </div>

              {/* Ink Founders Section */}
              <div className="bg-black text-white p-8 md:p-12 rounded-2xl mb-12 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D4D939]">Ink Founders - Complete Self Publishing Solutions</h2>
                  <p className="text-xl mb-8">Now the important part. Ink Founders provides complete publishing services under one system.</p>
                  
                  <p className="font-bold mb-4">We handle everything:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {['Developmental Editing', 'Copy Editing', 'Proofreading', 'Cover Design', 'Interior Formatting', 'Kindle Setup', 'Paperback & Hardcover setup', 'ISBN guidance', 'Marketing strategy', 'Book launch support'].map((item) => (
                      <div key={item} className="flex items-center">
                        <div className="w-2 h-2 bg-[#D4D939] rounded-full mr-3"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-lg">You do not manage multiple freelancers. You work with one professional team.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-black mb-8">Why Ink Founders Can Be Better for You</h2>

              <div className="space-y-8">
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-black mb-3">1. One Structured System</h3>
                  <p className="mb-2">Freelancers work separately.</p>
                  <p className="font-bold mb-2">We work as one team.</p>
                  <p>Editor, designer, formatter, and marketing strategist coordinate together. This improves quality.</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-black mb-3">2. Cost Control</h3>
                  <p className="mb-2">If you hire individually, your total cost may reach:</p>
                  <p className="text-xl font-bold text-red-600 mb-4">$5,000 – $10,000+</p>
                  <p>We structure services to avoid unnecessary spending. You invest where it matters.</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-black mb-3">3. Professional Platform Setup</h3>
                  <p className="mb-2">We publish correctly on:</p>
                  <div className="flex gap-4 mb-4 font-bold">
                    <span className="bg-gray-100 px-3 py-1 rounded">Amazon KDP</span>
                    <span className="bg-gray-100 px-3 py-1 rounded">IngramSpark</span>
                  </div>
                  <p className="mb-2">We optimize:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    <li>• Categories</li>
                    <li>• Keywords</li>
                    <li>• Book description</li>
                    <li>• Pricing strategy</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-black mb-3">4. Marketing Execution</h3>
                  <p className="mb-4">Many authors watch tutorials but fail to implement them.</p>
                  <p className="font-bold mb-2">We help with:</p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    <li>• Amazon Ads setup</li>
                    <li>• Launch strategy</li>
                    <li>• Email marketing</li>
                    <li>• Review generation strategy</li>
                  </ul>
                  <p className="mt-4 font-bold text-[#D4D939]">We focus on results.</p>
                </div>
              </div>

            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Sticky CTA */}
            <div className="sticky top-8 space-y-8">
              <div className="bg-[#D4D939] rounded-xl p-8 text-center shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4">Ready to Publish?</h3>
                <p className="text-black mb-6 opacity-90">Get a custom quote for your book project today.</p>
                <button onClick={() => router.push("/contactus")} className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                  Request a Quote
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4 border-b pb-2">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-[#D4D939]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-black">Phone</p>
                      <p className="text-sm text-gray-600">+1 (786) 524-4161</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-[#D4D939]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-black">Email</p>
                      <p className="text-sm text-gray-600">info@inkfounders.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-[#D4D939]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-black">Location</p>
                      <p className="text-sm text-gray-600">Miami Beach, FL 33139, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Share this Article</h3>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded text-sm font-bold hover:bg-blue-700">Facebook</button>
                  <button className="flex-1 bg-blue-400 text-white py-2 rounded text-sm font-bold hover:bg-blue-500">Twitter</button>
                  <button className="flex-1 bg-green-600 text-white py-2 rounded text-sm font-bold hover:bg-green-700">WhatsApp</button>
                </div>
              </div> */}

            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogOne;
