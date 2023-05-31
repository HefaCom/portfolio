import Head from "next/head";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState,useEffect } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import me from "../public/avatar.png";
const currYear = new Date().getFullYear();
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Application Developer', 'Data Analyst', 'Web Developer','Database Designer','Tech Consultant']; // Array of texts to swap

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000); // Swap every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Head>
        <title>Portfolio | Hezron Okoko</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className="bg-white px-2 sm:px-2 md:px-8 lg:px-40 dark:bg-gray-900">
       <div className="container mx-auto">
    <div className="w-full">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            {/* <h1 className="font-burtons text-xl">< a href="#">TheNerd</a></h1> */}
            <a href="#" className="flex items-center mb-4 sm:mb-0">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="TheNerd Logo" /> */}
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TheNerd</span>
            </a>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                
                
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Hezron Okoko
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Your ultimate <span className="text-3xl text-red-400 dark:text-blue" >{texts[currentIndex]} !</span>
               
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl ">
              Freelancer providing  web development, desktop application outstanding Data analysis srvices. Hire me today and let's get cracking! 
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.twitter.com/_hezron__" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle />
            </a>
              <a href="https://www.linkedin.com/in/hezron-okoko"target="_blank"  rel="noopener noreferrer"><AiFillLinkedin /></a>
              <a href="https://www.clone.nerdexperts.online"target="_blank"  rel="noopener noreferrer"><AiFillYoutube /></a>
              
              
            </div>
            <div className="text-center p-10 py-10">
              <div className="flex justify-center gap-4">
                {/* <a
                  className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2.5 sm:px-2 border-none rounded-md hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm w-40 md:w-auto"
                  href="#"
                >
                  Resume
                </a> */}
                <a href="mailto:okokohhezron254@gmail.com">
                <button
                  type="button"
                  className="flex items-center justify-center bg-gradient-to-r from-blue-500  text-900 via-blue-600 to-blue-700 text-white border-none rounded-md hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-6 py-2.5 w-40 md:w-auto"
                >
                  Contact
                </button>
                </a>
              </div>
            </div>


           <div className="mx-auto bg-gradient-to-b from-teal-300 rounded-lg w-80 h-80 relative overflow-hidden mt-20 md:h-80 md:w-80 md:items-center md:justify-center flex justify-center">
            <div className="flex items-center">
              <Image src={deved} layout="fill" objectFit="cover" alt="TheNerd" />
            </div>
          </div>

          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance Data analyst, designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use. I've also build data pipeline models which has been of great impacts on businesses.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including data analysis, databases designs & intergration,  brand design, programming and tutoring.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="TheNerd"/>
              <h3 className="text-2xl font-extrabold dark:text-red  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant UI/UX designs for both web and desktop applications suited for your needs following core design theory.
              </p>
              <h4 className="py-4 text-teal-600">Tools Used</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="TheNerd"/>
              <h3 className="text-2xl font-extrabold dark:text-red ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great web or desktop application? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">C#</p>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">PHP</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="TheNerd"/>
              <h3 className="text-2xl font-extrabold dark:text-red ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Platforms</h4>
              <p className="text-gray-800 py-1">Zoom</p>
              <p className="text-gray-800 py-1">Google meet</p>
              <p className="text-gray-800 py-1">Anydesk</p>
              <p className="text-gray-800 py-1">Remote</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="TheNerd"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="TheNerd"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="TheNerd"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="TheNerd"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt="TheNerd"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt="TheNerd"
              />
            </div>
          </div>
        </section> 

        <section className="">
        <h3 className="text-3xl py-1 dark:text-white ">Major Accomplishments</h3>
          
          <ol class="items-center sm:flex">
              <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                      <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                      </div>
                      <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pr-8">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">As Data Analyst </h3>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2, 2017</time>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Developed and implemented a data-driven strategy that resulted in a 20% increase in customer retention for a leading e-commerce company.</p>
                      <hr className="py-2"></hr>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 20, 2022</time>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Created interactive dashboards and reports that provided actionable insights to stakeholders, improving decision-making processes and driving revenue growth.</p>
                  </div>
              </li>
              <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                      <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                      </div>
                      <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pr-8">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">As Developer</h3>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 23, 2021</time>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Led the development of a web application from conception to deployment, incorporating user feedback and iterative improvements, resulting in a user base growth of 50% within six months.</p>
                      <hr className="py-2"></hr>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 20, 2021</time>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Collaborated with cross-functional teams to integrate third-party APIs and streamline data workflows, enhancing system performance and reducing response time by 40%.</p>
                  </div>
              </li>
              <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                      <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                      </div>
                      <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pr-8">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">As a Designer</h3>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 10, 2020</time>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Designed and launched a visually stunning and user-friendly mobile app, receiving positive feedback from users and increasing user engagement by 25%.</p>
                      <hr className="py-2"></hr>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 15, 2022</time>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Created a comprehensive style guide and design system, ensuring brand consistency across multiple platforms and enabling efficient collaboration with developers and stakeholders.</p>
                  </div>
              </li>
          </ol>

        </section>
        
{/* My testinomials */}
        <section className="my-6">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Testinomials</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              What people say about  completed contracts
              </p>
            
          </div>
          <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-black flex-1">
              
              <figure class="max-w-screen-md">
                  <div class="flex items-center mb-4 text-yellow-300">
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <blockquote>
                      <p class="text font-semibold text-gray-900 dark:text-white">"I was impressed with your data analysis skills and attention to detail. You were able to extract valuable insights from complex datasets and provide actionable recommendations. Your expertise in data visualization and statistical analysis greatly contributed to our project's success. I highly recommend you as a talented and reliable data analyst."</p>

                  </blockquote>

                  <figcaption class="flex items-center mt-6 space-x-3">
                      <Image width={100} height={100} class="w-6 h-6 rounded-full" src={me} alt="profile picture"/>
                      <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                          <cite class="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
                          <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">Data Science Manager at Flowbite</cite>
                      </div>
                  </figcaption>
              </figure>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-black flex-1">
              
              <figure class="max-w-screen-md">
                  <div class="flex items-center mb-4 text-yellow-300">
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <blockquote>
                      <p class="text font-semibold text-gray-900 dark:text-white">"Working with you as a developer was a pleasure. Your coding skills and problem-solving abilities are exceptional. You consistently delivered high-quality code and demonstrated a strong understanding of software development principles. Your collaborative approach and effective communication made you a valuable asset to our development team. I would gladly work with you again on future projects."</p>
                  </blockquote>
                  <figcaption class="flex items-center mt-6 space-x-3">
                      <Image width={100} height={100} class="w-6 h-6 rounded-full" src={deved} alt="profile picture"/>
                      <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                          <cite class="pr-3 font-medium text-gray-900 dark:text-white"> Jane Smith</cite>
                          <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">Senior Software Engineer at NGO</cite>
                      </div>
                  </figcaption>
              </figure>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-black flex-1">
              
              <figure class="max-w-screen-md">
                  <div class="flex items-center mb-4 text-yellow-300">
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <blockquote>
                      <p class="text font-semibold text-gray-900 dark:text-white">"Your design skills are truly remarkable. You have a keen eye for aesthetics and a deep understanding of user experience. Your ability to transform complex concepts into visually appealing designs exceeded our expectations. Your attention to detail and creativity brought life to our project. It was a pleasure collaborating with you, and I highly recommend your design expertise to anyone seeking top-notch visual solutions."</p>
                  </blockquote>
                  <figcaption class="flex items-center mt-6 space-x-3">
                      <Image width={100} height={100} class="w-6 h-6 rounded-full" src={me} alt="profile picture"/>
                      <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                          <cite class="pr-3 font-medium text-gray-900 dark:text-white">David Williams</cite>
                          <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">Creative Director at ALX</cite>
                      </div>
                  </figcaption>
              </figure>

            </div>
          </div>
        </section>



{/* My foter */}
        
<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TheNerd</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="https://www.nerdexperts.online" target="_blank"rel="noopener noreferrer" class="mr-4 hover:underline md:mr-6 ">Partners</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
                </li>
                <li>
                    <a href="mailto:okokohhezron254@gmail.com" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currYear} <a href="#" class="hover:underline">TheNerd™</a>. All Rights Reserved.</span>
    </div>
</footer>

</div>
</div>
      </main>
    </div>
  );
}
