import React, { use, useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {Line} from 'rc-progress' //importing Line from rc-progress library to create a progress bar.
import Footer from '../../components/student/Footer'



const MyEnrollments = () => {

  const { enrolledCourses, calculateCourseDuration, navigate} = useContext(AppContext) //enrolledCourses is a state variable (contains the enrolled courses) created in appContext.js file.

  const [progressArray, setProgressArray]= useState([
    {lectureCompleted : 2 , totalLectures : 4},
    {lectureCompleted : 4 , totalLectures : 6},
    {lectureCompleted : 6 , totalLectures : 10},
    {lectureCompleted : 7 , totalLectures : 7},
    {lectureCompleted : 5 , totalLectures : 5},
    {lectureCompleted : 5 , totalLectures : 10},
    {lectureCompleted : 4 , totalLectures : 10},
    {lectureCompleted : 7 , totalLectures : 10},
    {lectureCompleted : 8 , totalLectures : 10},
    {lectureCompleted : 10 , totalLectures : 10},
    {lectureCompleted : 2 , totalLectures : 10},
    {lectureCompleted : 4 , totalLectures : 10},
    {lectureCompleted : 6 , totalLectures : 10},
  ]) 
  
  return (
    <>
    <div className='md:px-36 px-8 pt-10 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100'>
      <h1 className='text-3xl font-bold text-gray-800 mb-6 transform hover:scale-105 transition-transform duration-300'>
        My Enrollments
      </h1>
      <div className='shadow-lg rounded-lg overflow-hidden'>
        <table className='md:table-auto table-fixed w-full overflow-hidden bg-white'>
          <thead className='text-gray-900 bg-gray-50 text-sm text-left max-sm:hidden'>
            <tr className='border-b border-gray-200'>
              <th className="px-6 py-4 font-semibold truncate hover:bg-gray-100 transition-colors duration-200">Course</th>
              <th className="px-6 py-4 font-semibold truncate hover:bg-gray-100 transition-colors duration-200">Duration</th>
              <th className="px-6 py-4 font-semibold truncate hover:bg-gray-100 transition-colors duration-200">Completed</th>
              <th className="px-6 py-4 font-semibold truncate hover:bg-gray-100 transition-colors duration-200">Status</th>
            </tr>
          </thead>
          
          <tbody className='text-gray-700'>
          
            {enrolledCourses.map((course, index)=>(
              <tr key={index} className='border-b border-gray-500/20'>   {/*index is the index of the course in the enrolledCourses array. It is used as a key to uniquely identify each course in the list. This is important for React to efficiently update and render the list of courses.*/}
                 
                 <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 ">
                   <img src={course.courseThumbnail} alt="" className="w-14 sm:w-24 md:w-28" />
 
                  <div className="flex-1">
                    <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                    <Line 
                        strokeWidth={2} percent={progressArray[index] ? 
                        (progressArray[index].lectureCompleted * 100) / progressArray[index].totalLectures : 0}
                         className='bg-gray-300 rounded-full'> 
                      
                    </Line>
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                   {calculateCourseDuration(course)} 
                </td>
                  
                <td className='px-4 py-3 max-sm:hidden'>
                  {progressArray[index]&& `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`} 
                  <span>Lectures</span>
                </td>
                <td className='px-4 py-3 max-sm:text-right'>
                  <button className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white' onClick={()=> navigate('/player/'+ course._id)}> {/*course._id is the id of the course. It is used to uniquely identify each course in the database. We will use this id to fetch the course details from the database when the user clicks on the button.*/}
                    { progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1? 'Completed' : 'On going'}
                    </button>
                  
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>

    <Footer />  
    </>
  )
}

export default MyEnrollments