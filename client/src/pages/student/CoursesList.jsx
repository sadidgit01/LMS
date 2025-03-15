import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/student/CourseCard'

const CoursesList = () => {
 
  const { navigate, allCourses } = useContext(AppContext)
  
  const { input } = useParams() // get the input from the URL
  const [filteredCourse, setFilteredCourse] = useState([]) //filteredCourse is the name of the state variable that will hold the filtered courses. setFilteredCourse is the function that will update the filteredCourse state variable. We will initialize the filteredCourse state variable with an empty array.

  // UseEffect to filter courses based on the input
  useEffect(() => {
    if (input) {
      const tempCourses = allCourses.filter(course =>
        course.courseTitle.toLowerCase().includes(input.toLowerCase())
      )
      setFilteredCourse(tempCourses)
    } else {
      setFilteredCourse(allCourses)
    }
  }, [input, allCourses]) // The useEffect hook will run whenever the input or allCourses changes

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Courses List</h1>
            <p className='text-gray-500'>
              <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/')}>Home</span> / <span>Course List</span>
            </p>
          </div>
          <SearchBar data={input} />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
          {filteredCourse.map((course, index) => (<CourseCard key={index} course={course} />
          ))} {/* Display the filtered or all courses */}
        </div>
      </div>
    </>
  )
}

export default CoursesList