import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext)

  return (
    <div className='py-16 md:px-40 px-8 text-center'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>
        Discover our top-rated courses across various categories. From coding and design to <br /> business and wellness, our courses are crafted to deliver results.
      </p>

      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
    {allCourses.slice(0,4).map((course, index) =>  <CourseCard key={index} course={course} />)}                    
         {/* .slice(0,4):- display only 4 courses*/}
      </div>

      <Link
        to={'/course-list'}
        onClick={() => scrollTo(0, 0)} //scroll to the top of the page when we click on the "Show all courses" button
        className='text-black bg-white-600 hover:bg-blue-700 border border-blue-600 px-10 py-3 rounded inline-block mt-4 transition-colors duration-300 hover:text-white hover:scale-105 '
      >
        Show all courses
      </Link>
    </div>
  )
}

export default CoursesSection