// import { robotoMono } from "@/app/fonts";
import Image from "next/image";

const BOOKS = [
  {
    title: "Hollow Places",
    author: "Claire Mahoney",
    cover: "/ourbook/book1.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "Day and Dream",
    author: "Claire Mahoney",
    cover: "/ourbook/book2.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "Hollow Places",
    author: "Dr. Avi Malik",
    cover: "/ourbook/book3.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "The Shape of Grief",
    author: "Dr. Alice Thorne",
    cover: "/ourbook/book4.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "The Sound of my father...",
    author: "Claire Mahoney",
    cover: "/ourbook/book5.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "Let the Earth Hold You",
    author: "Claire Mahoney",
    cover: "/ourbook/book6.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "Wound We Inherit",
    author: "Helena Cruz",
    cover: "/ourbook/book7.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "The Slow Becoming",
    author: "D. Hassan Tariq",
    cover: "/ourbook/book8.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "The Fire You Carry",
    author: "Claire Mahoney",
    cover: "/ourbook/book9.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "The Walk Home",
    author: "Claire Mahoney",
    cover: "/ourbook/book10.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "My Grandmother’s Field",
    author: "Dr. Avi Malik",
    cover: "/ourbook/book11.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "A life without Apologies",
    author: "Dr. Alice Thorne",
    cover: "/ourbook/book12.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "When Boys Don’t Cry",
    author: "Claire Mahoney",
    cover: "/ourbook/book13.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "Echoes Of her Hands",
    author: "Claire Mahoney",
    cover: "/ourbook/book14.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "Dust in the Spine",
    author: "Helena Cruz",
    cover: "/ourbook/book15.png",
    date: "6-July-2023",
    genre: "Novel"
  },
  {
    title: "Roots In the Dust",
    author: "Helena Cruz",
    cover: "/ourbook/book16.png",
    date: "6-July-2023",
    genre: "Novel"
  }
];

const BookGallery = () => (
  <section className="w-full py-12 bg-[#F6F5F3] flex flex-col items-center">
    <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-24 gap-x-0">
      {BOOKS.map((book, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          {/* Book Cover */}
          <div className="w-[225px] h-[350px] relative  mb-4">
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="object-cover rounded-sm shadow-md"
              
            />
          </div>
          {/* Book Title */}
          <h3 className="font-bold text-black text-[22px] mb-0.5 truncate w-[180px]">
            {book.title}
          </h3>
          {/* Author */}
          <span className="text-[15px] text-[#444] mb-2 block">{book.author}</span>
          {/* Release and Genre */}
          {/* <div className={`text-[13px] text-[#8A8A8A] mb-3 leading-tight  ${robotoMono.className} border-t-[1px] border-b-[1px] border-gray-200`}>
            Released: <span className="">{book.date}</span><br />
            Genre: <span className="">{book.genre}</span>
          </div> */}
          {/* Button */}
          {/* <button className="bg-[#DADD39] text-black font-medium rounded-md px-6 py-2 text-[15px] shadow-none transition hover:bg-transparent hover:border hover:border-black">
            Buy Now
          </button> */}
        </div>
      ))}
    </div>
  </section>
);

export default BookGallery;
