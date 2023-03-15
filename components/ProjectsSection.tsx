import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { HiArrowDown } from "react-icons/hi"

const projects = [
  {
    name: "De-Twitter",
    description:
      "Decentralised Twitter Clone, built in 24 hours for a Web3 Sprint. Technologies used: Next.JS, Tailwind.CSS, MetaMask, HardHat.",
    image: "/de-twitter.png",
    github: "https://github.com/andrehzh/crypto-friends-blockchain",
    link: "https://drive.google.com/file/d/1nlaUiGMUpjHaPVdVXrdGa8uj7C8KDJ0n/view?usp=share_link",
  },
  {
    name: "Scoops",
    description: "Mobile Application for a Small Business Marketplace. Technologies used: React Native, Firebase, Node.JS.",
    image: "/scoops.png",
    github: "https://github.com/andrehzh/Scoops",
    link: "https://drive.google.com/file/d/1CvVacMl00IdP-TC5A9bab8nfJHhzQkDh/view?usp=share_link",
  },
  {
    name: "DBLP ETL Pipeline",
    description:
      "An ETL Pipeline, which extracted data from DBLP Automatically. Technologies used: Apache Airflow, CassandraDB, Python.",
    image: "/etl-pipeline.png",
    github: "https://github.com/andrehzh/DBLP-ETL-Pipeline",
    link: "https://drive.google.com/file/d/1LbaKpEyLF8g49Eus9VKK_rSz_egGrxqI/view?usp=share_link",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        <div>

        </div>
        <div className="flex flex-row items-center text-center justify-center ">
          <HiArrowDown size={35} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
