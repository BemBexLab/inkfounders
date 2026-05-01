"use client";

import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { MdLocalPhone } from "react-icons/md";

const services = [
  {
    title: "E-Book Writing",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M16.9167 5.42527L16.91 5.41621L16.9258 5.4185L19.7699 3.30497L22.5879 7.09712L24.484 5.68811L20.2571 0L15.5123 3.52585L14.1079 1.62634C13.4152 2.14108 9.11269 5.33826 8.41968 5.85323L11.2286 9.65216L16.9167 5.42527Z"
          fill="#1F1F1F"
        />
        <path
          d="M12.6331 11.5516C13.3622 12.5377 29.4361 34.2773 30.2875 35.4289L35.9494 31.1665C35.1007 30.0186 19.0578 8.32088 18.3212 7.32471L12.6331 11.5516Z"
          fill="#1F1F1F"
        />
        <path
          d="M1.7915 27.0076H4.15377V29.3698H1.7915V27.0076Z"
          fill="#1F1F1F"
        />
        <path
          d="M6.51611 27.0076H18.3275V29.3698H6.51611V27.0076Z"
          fill="#1F1F1F"
        />
        <path d="M1.7915 22.283H14.784V24.6452H1.7915V22.283Z" fill="#1F1F1F" />
        <path
          d="M1.7915 31.7322H21.8708V34.0944H1.7915V31.7322Z"
          fill="#1F1F1F"
        />
        <path
          d="M38.2081 40L36.9055 33.4033L32.168 36.97C32.2132 36.9926 38.192 39.992 38.1999 39.996C38.1996 39.9959 38.1995 39.9957 38.1991 39.9955L38.2081 40Z"
          fill="#1F1F1F"
        />
        <path
          d="M17.1462 37.6377V40H32.9405L28.2318 37.6377H17.1462Z"
          fill="#1F1F1F"
        />
      </svg>
    ),
  },
  {
    title: "E-Book Publishing",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M14.1176 3.52954H11.7647V12.9413H4.70588V15.2942H11.7647V17.6472H0V20.0001H11.7647V22.3531H4.70588V24.706H11.7647V38.8237H37.6471V36.4707H14.1176V3.52954Z"
          fill="#1F1F1F"
        />
        <path d="M0 12.9412H2.35294V15.2941H0V12.9412Z" fill="#1F1F1F" />
        <path d="M0 22.353H2.35294V24.706H0V22.353Z" fill="#1F1F1F" />
        <path
          d="M30.5884 10.5883V1.17651H16.4707V34.1177H40.0001V10.5883H30.5884ZM22.3531 7.05887H28.2354V9.41181H22.3531V7.05887ZM22.3531 11.7647H28.2354V14.1177H22.3531V11.7647ZM34.1178 28.2353H22.3531V25.8824H34.1178V28.2353ZM34.1178 23.5295H22.3531V21.1765H34.1178V23.5295ZM34.1178 18.8236H22.3531V16.4706H34.1178V18.8236Z"
          fill="#1F1F1F"
        />
        <path
          d="M32.9412 1.86572V8.23537H39.3108L32.9412 1.86572Z"
          fill="#1F1F1F"
        />
      </svg>
    ),
  },
  {
    title: "E-Book Cover Design",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g clipPath="url(#clip0_354_1480)">
          <path
            d="M14.02 37.4038H25.9801V39.9218H14.02V37.4038Z"
            fill="#1F1F1F"
          />
          <path
            d="M18.7661 20.1548H21.2338V34.9801H18.7661V20.1548Z"
            fill="#1F1F1F"
          />
          <path
            d="M20 13.7148L18.7766 15.6033V17.7308H21.2235V15.6033L20 13.7148Z"
            fill="#1F1F1F"
          />
          <path
            d="M20.2239 2.90752C12.8533 2.78002 6.88582 8.74534 6.81699 16.3428C6.79285 18.9964 7.5134 21.5735 8.90067 23.7956C12.2266 29.1226 11.5237 34.1374 11.6188 34.9802H16.4111L16.4101 17.731H16.4211V14.8696L20 9.34541L23.5789 14.8696V17.731H23.5888L23.5897 34.9801H28.3813C28.4861 34.0596 27.7346 29.2251 31.1234 23.7568C32.4722 21.5803 33.1847 19.0594 33.1836 16.4664C33.1805 9.11346 27.478 3.03159 20.2239 2.90752Z"
            fill="#1F1F1F"
          />
          <path
            d="M10.8698 3.38961L8.16953 0.078125L6.36523 1.63609L9.06539 4.94758L10.8698 3.38961Z"
            fill="#1F1F1F"
          />
          <path
            d="M3.3501 5.18066L2.17236 7.2798L5.89447 9.49113L7.07221 7.39207L3.3501 5.18066Z"
            fill="#1F1F1F"
          />
          <path
            d="M0 14.0736L4.425 14.8765L4.83406 12.4895L0.408984 11.6865L0 14.0736Z"
            fill="#1F1F1F"
          />
          <path
            d="M33.6347 1.63609L31.8304 0.078125L29.1301 3.38961L30.9344 4.94758L33.6347 1.63609Z"
            fill="#1F1F1F"
          />
          <path
            d="M36.6498 5.18066L32.9277 7.39207L34.1055 9.49113L37.8276 7.2798L36.6498 5.18066Z"
            fill="#1F1F1F"
          />
          <path
            d="M39.591 11.6865L35.166 12.4895L35.5749 14.8765L40 14.0736L39.591 11.6865Z"
            fill="#1F1F1F"
          />
        </g>
        <defs>
          <clipPath id="clip0_354_1480">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "E-Book & Proofreading",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g clipPath="url(#clip0_354_1495)">
          <path
            d="M19.6894 33.1258H4.45321V6.71899H0V37.5008H21.1723V34.4695C20.6395 34.0805 20.1331 33.6233 19.6894 33.1258Z"
            fill="#1F1F1F"
          />
          <path d="M22.3442 0V5.54698H27.9693L22.3442 0Z" fill="#1F1F1F" />
          <path
            d="M17.3213 27.813H9.5313V25.4692H17.3557C17.9933 20.3976 22.8913 16.6381 27.9692 17.3394V7.89078H20.0003V0H6.79688V30.7819H18.1432C17.7104 29.8506 17.4322 28.8506 17.3213 27.813ZM19.844 10.8596H25.1566V13.2034H19.844V10.8596ZM9.5313 18.2816V15.9378H17.1877V18.2816C15.3284 18.2816 11.4106 18.2816 9.5313 18.2816ZM9.5313 2.89068H11.8751V5.23448H9.5313V2.89068ZM9.5313 10.8596H17.1877V13.2034C16.4331 13.2034 10.0905 13.2034 9.5313 13.2034C9.5313 12.7617 9.5313 11.2744 9.5313 10.8596Z"
            fill="#1F1F1F"
          />
          <path
            d="M31.8531 21.7105C29.1207 18.9174 24.4412 18.9189 21.7107 21.7105C18.2669 25.1244 19.2025 30.9774 23.5162 33.1701C25.5238 34.2263 28.1422 34.2088 30.1343 33.1255C34.3663 30.9365 35.2661 25.0476 31.8531 21.7105ZM25.8374 30.5747L22.6857 27.4231L24.3436 25.766L25.8374 27.2598L29.7968 23.3003C30.1308 23.6341 31.1063 24.6104 31.4539 24.9582C31.4539 24.9582 27.1202 29.2919 25.8374 30.5747Z"
            fill="#1F1F1F"
          />
          <path
            d="M39.4867 37.0061L34.6366 32.156C33.9807 33.1138 33.1139 33.9824 32.1553 34.6365L37.0062 39.4866C37.6898 40.171 38.8031 40.171 39.4867 39.4866C40.1711 38.803 40.1711 37.6897 39.4867 37.0061Z"
            fill="#1F1F1F"
          />
        </g>
        <defs>
          <clipPath id="clip0_354_1495">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Audiobook Publishing",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g clipPath="url(#clip0_354_1505)">
          <path
            d="M29.423 4.66431C24.8694 4.66431 21.178 8.35571 21.178 12.9093C21.5822 23.8343 37.2654 23.8314 37.668 12.9092C37.668 8.35571 33.9766 4.66431 29.423 4.66431ZM32.3032 12.9471L30.6008 11.8122V17.6207H28.2451V11.8122L26.5427 12.9471L25.236 10.987L29.4229 8.19568L33.6098 10.987L32.3032 12.9471Z"
            fill="#1F1F1F"
          />
          <path
            d="M14.1108 30.5773C8.915 30.5773 4.68799 26.3502 4.68799 21.1544V15.2651H7.0437V12.9094H2.33228V21.1544C2.33228 26.8426 6.38536 31.6018 11.7551 32.6962V37.6444H7.0437V40.0001H21.178V37.6444H16.4666V32.6962C21.2896 31.7132 25.0494 27.7733 25.7651 22.8595C24.9664 22.5649 24.2125 22.1767 23.517 21.7083C23.2292 26.6472 19.1206 30.5773 14.1108 30.5773Z"
            fill="#1F1F1F"
          />
          <path
            d="M11.7551 15.265H7.0437V18.7986H11.7551V21.1543H7.0437C7.40012 30.5193 20.8249 30.5122 21.178 21.1543H16.4666V18.7986H20.6131C19.9028 17.7395 19.3783 16.5461 19.0865 15.265H16.4666V12.9093H18.8223C18.8223 11.6582 19.0417 10.4667 19.4286 9.37574H16.4666V7.02003H20.6131C20.7788 6.77284 20.955 6.53311 21.1404 6.30115C19.9877 -2.51056 7.31304 -1.90514 7.0437 7.02003H11.7551V9.37574H7.0437V12.9093H11.7551V15.265Z"
            fill="#1F1F1F"
          />
        </g>
        <defs>
          <clipPath id="clip0_354_1505">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Audiobook Narration",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g clipPath="url(#clip0_354_1515)">
          <path
            d="M0.00195312 3.51562C0.00195312 5.45422 1.57898 7.03125 3.51758 7.03125H30.7832V0H3.51758C1.57898 0 0.00195312 1.57703 0.00195312 3.51562Z"
            fill="#1F1F1F"
          />
          <path
            d="M21.252 17.3491L14.2207 21.7437V27.4749L21.252 31.8694V17.3491Z"
            fill="#1F1F1F"
          />
          <path
            d="M9.5332 22.2656H11.877V26.9531H9.5332V22.2656Z"
            fill="#1F1F1F"
          />
          <path
            d="M39.998 22.2805C39.998 18.8416 38.6567 15.6063 36.2191 13.1699L34.562 14.827C36.5556 16.8217 37.6542 19.4688 37.6542 22.2805C37.6542 25.0923 36.5555 27.7405 34.562 29.7352L36.2191 31.3923C38.6567 28.9548 39.998 25.7184 39.998 22.2805Z"
            fill="#1F1F1F"
          />
          <path
            d="M32.9049 28.0792C34.4567 26.5297 35.3105 24.4697 35.3105 22.2804C35.3105 20.09 34.4567 18.0312 32.9049 16.4817L31.2478 18.1411C32.3556 19.2465 32.9667 20.7172 32.9667 22.2804C32.9667 23.8436 32.3556 25.3142 31.2478 26.422L32.9049 28.0792Z"
            fill="#1F1F1F"
          />
          <path
            d="M3.51758 39.9999H30.7832V9.37491H3.51758C2.1932 9.37491 0.984141 8.91702 0.00195312 8.17358V36.4843C0.00195312 38.4229 1.57898 39.9999 3.51758 39.9999ZM7.18945 19.9218H12.712L23.5957 13.1194V36.0991L12.712 29.2968H7.18945V19.9218Z"
            fill="#1F1F1F"
          />
        </g>
        <defs>
          <clipPath id="clip0_354_1515">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Audiobook Editing",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M40 7.99478V7.11768C40 4.53299 37.8972 2.43018 35.3125 2.43018H4.6875C2.10281 2.43018 0 4.53299 0 7.11768V7.99486L40 7.99478Z"
          fill="#1F1F1F"
        />
        <path
          d="M0 10.3386V32.8825C0 35.4671 2.10281 37.57 4.6875 37.57H35.3125C37.8972 37.57 40 35.4671 40 32.8825V10.3386H0ZM28.9584 20.5991V18.2553H30.7031V15.6772H33.0469V18.2553H34.7917V20.5991H33.0469V31.5106H30.7031V20.5991H28.9584ZM21.0417 23.9324V21.5886H22.7865V15.6771H25.1302V21.5886H26.875V23.9324H25.1302V31.5105H22.7865V23.9324H21.0417ZM13.125 28.0991V25.7553H14.8698V15.6772H17.2136V25.7553H18.9584V28.0991H17.2136V31.5106H14.8698V28.0991H13.125ZM5.20836 21.4324V19.0886H6.95312V15.6771H9.29688V19.0886H11.0417V21.4324H9.29688V31.5105H6.95312V21.4324H5.20836Z"
          fill="#1F1F1F"
        />
      </svg>
    ),
  },
];

const sectionVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhatYouGet = () => {
  const handleQuoteClick = () => {
    window.dispatchEvent(new Event("open-quote-popup"));
  };

  return (
    <motion.section
      className="overflow-hidden bg-[#F4F3E1] px-10 py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.p
        className="mb-3 text-center font-semibold tracking-[0.18em] text-[#AAAAAA]"
        variants={fadeUpVariants}
      >
        WHAT YOU GET
      </motion.p>
      <motion.h2
        className="text-center text-6xl font-black text-black"
        variants={fadeUpVariants}
      >
        Everything You Need To <span className="text-yellow-500">Succeed</span>
      </motion.h2>
      <motion.p
        className="mt-8 text-center text-lg text-black"
        variants={fadeUpVariants}
      >
        We have customized our packages to be more than just "Affordable"; we
        make sure every author receives elite, "High Quality" service. From the
        "Best Price" options to our all inclusive Premium Publishing Package, we
        cover your journey from initial consultation and professional editing to
        global distribution and broad marketing.
      </motion.p>

      <motion.div
        className="mt-14 flex flex-wrap justify-center gap-8"
        variants={sectionVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="group relative flex w-full max-w-[340px] flex-col items-center justify-center overflow-hidden rounded-[15px] border border-black bg-transparent py-9 shadow-lg transition-all duration-300 ease-in-out hover:bg-[#DADD39] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <motion.div
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#181818]"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.85 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.div
              className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/30 blur-2xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, scale: 1.08 }}
            />

            <motion.div
              className="mb-2 text-xs font-bold tracking-[0.3em] text-[#5d5d5d]"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.05 }}
            >
            </motion.div>

            <motion.div
              className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-yellow-500 text-3xl font-bold text-black transition-colors duration-300 group-hover:bg-white"
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 0.58,
                delay: 0.18 + index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ rotate: 6, scale: 1.07 }}
            >
              {service.svg}
            </motion.div>

            <motion.h3
              className="mt-5 text-[20px] font-semibold text-[#333]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: 0.24 + index * 0.05 }}
            >
              {service.title}
            </motion.h3>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-4 flex flex-col items-stretch gap-3 min-[430px]:flex-row min-[430px]:justify-center lg:mt-10 lg:flex-wrap lg:justify-center"
        variants={fadeUpVariants}
      >
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <button
            type="button"
            onClick={handleQuoteClick}
            className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[50px] lg:min-w-[200px] lg:px-6 lg:text-[15px]"
          >
            <span className="slide-bg"></span>
            <span className="relative z-10 whitespace-nowrap font-medium tracking-[0.08em]">
              Request a Quote
            </span>
          </button>
        </motion.div>

        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="tel:+17864961231"
            className="btn-slide-bg flex h-10 items-center justify-center gap-x-2 rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[50px] lg:min-w-[200px] lg:px-6 lg:text-[15px]"
          >
            <span className="slide-bg"></span>
            <MdLocalPhone className="relative z-10 text-xl sm:text-[23px] lg:text-[19px]" />
            <span className="relative z-10 whitespace-nowrap font-medium tracking-[0.08em]">
              +1 (786) 496-1231
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WhatYouGet;
