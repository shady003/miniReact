import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Doon Public School</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">To lay foundation for the development of complete personality of its students by adopting all possible methods of rigorous child development so that its students are prepared to accept all the challenges and responsibilities of life in future and become a</p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            <div>
                <Link to="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src="https://imgs.search.brave.com/d3mt0jQSw34dgd0Xws92Xhfu9iguI-ENfzqRgCZVoXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzamFtbXUuY29t/L2ltZy9iYW5uZXIv/SU1HLTIwMjIwMzA4/LVdBMDEwMi5qcGc" alt="" />
                </Link>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> faculty </span>
                <p className="mt-6 text-xl font-semibold">
                    <Link to="#" title="" className="text-black"> How to mange your remote team? </Link>
                </p>
                <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
            </div>

            <div>
                <Link to="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src="https://imgs.search.brave.com/iz-Ic3tMkfSfPQMTPt7Nmp8nx3cKpd5btDuGB4mpZtk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kcHNk/aGFuYmFkLmluL2lt/YWdlcy9zbGlkZXIv/Y2xhc3Nyb29tLmpw/ZWc" alt="" />
                </Link>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> class rooms </span>
                <p className="mt-6 text-xl font-semibold">
                    <Link to="#" title="" className="text-black"> 6 Product launching emails you want to use on next campaign. </Link>
                </p>
                <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
            </div>

            <div>
                <Link to="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img className="object-cover w-full h-full" src="https://imgs.search.brave.com/xr0-0crqPb6xd9ayFks8CQpIvmLN7hJJDcvtB1nxr4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kaXNk/ZWhyYWR1bi5jb20v/aW1hZ2VzL3NsaWRl/ci9zbGlkZTEwLmpw/Zw" alt="" />
                </Link>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Playground </span>
                <p className="mt-6 text-xl font-semibold">
                    <Link to="#" title="" className="text-black"> The More You Play , The More You Grow </Link>
                </p>
                <p className="mt-4 text-gray-600">An innovative direction towards providing Global education with its feet firmly grounded in the Indian culture. A humble Endeavour to touch the greatest heights of excellence in education of Kanpur. An Idea, a Vision, a dream to import quality education to children, and setting up of the school with kindergarten section, to senior secondary education.</p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
            </div>
        </div>
    </div>
</section>

  )
}

export default About