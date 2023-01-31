import Head from 'next/head';
import Image from 'next/image';
import { BsFillLightbulbFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import asia from "../public/asia.png";
import as1 from "../public/as1.png";
import as2 from "../public/as2.png";
import as3 from "../public/as3.png";
import as4 from "../public/as4.png";
export default function Home() {
  return (
    <div >
      <Head>
        <title>AsiaCL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white py-2">
        <section className=" min-h-screen">
          <nav className='p-10 mb-12 flex justify-between'>
            <h2 className='text-5xl font-burtons'> AsiaCL </h2>
            <ul className='flex items-center'>

              <li><BsFillLightbulbFill className='cursor-pointer text-2xl' /></li>
              <li><a className="bg-gradient-to-tr from-cyan-200 to-cyan-700 text-white py-2 rounded-md ml-8" href='#'> Resume </a></li>
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              AsiaCL.com
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Worldwide deals
            </h3>
            <p className="text-md py-5 leading-10 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              This is a potentiel domain name to build a successful business specially in asian where commerce and economy are growing exponentially
            </p>
          </div>
          <div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={asia} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl py-5 dark:text-white  ">Offers</h3>
            <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
              AsiaCl means clearly Asian Clients is a domain name available for sale on
              <span className="text-teal-500"> GoDaddy </span>
              plateforme , it's a potential brand for  <span className="text-teal-500">startups </span>
              that looking for building the future of economy in asia.
            </p>

          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={as1}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={as2}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={as3}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={as4}
              />
            </div>
          </div>
          <div className='content-center	'>
            <h1 className=" text-2xl dark:text-white md:text-sm">All rights are reserves @2023</h1>
          </div>
        </section>
      </main>
    </div>
  )
}
