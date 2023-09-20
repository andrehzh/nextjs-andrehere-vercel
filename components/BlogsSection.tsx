import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  // {
  //   name: "NUS IT x Starhub Outdoor Wifi Competition",
  //   description: "Clinched 1st Runner-Up for a Schoolwide Design Competition with no design experience.",
  //   image: "/outdoorwifi.png",
  //   link: "https://www.linkedin.com/posts/andre-heng_how-i-leveraged-chatgpt-midjourney-activity-7087409603436560384-nmYC?utm_source=share&utm_medium=member_desktop",
  // },
  {
    name: "Design Prodigy Challenge 2023",
    description:
      "Came in first for a B2B Marketing Competition, really thankful for my teammates. Great Experience.",
    image: "/dpuc.png",
    link: "https://drive.google.com/file/d/1OWdeLOVXUv8sKa_py7YpqLTOfntxg-hN/view?usp=share_link",
  },
  {
    name: "Hachi By Tokyo",
    description: "A Day In The Life of one of Hachi By Tokyo's Groomer, a pet grooming shop I run!",
    image: "/hbt.png",
    link: "https://www.youtube.com/watch?v=Q6rggPrOLUY",
  },
]

const BlogsSection = () => {
  return (
    <section id="blogs">
      <h1 className="my-10 text-center font-bold text-4xl">
        Blog
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
        <div></div>
      </div>
    </section>
  )
}

export default BlogsSection
