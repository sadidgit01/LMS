import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import Footer from '../../components/student/Footer'
import YouTube from 'react-youtube'



const CourseDetails = () => {

    const {id}= useParams()           //get the id from the URL
   
    const [courseData, setCourseData]= useState(null) //courseData is used to store the course data of the course with the id that matches the id in the URL
    const [openSections, setOpenSections]= useState({})  //openSections is used to open or close the chapter content 
    const [isAlreadyEnrolled, setIsAlreadyEnrolled]= useState(false)  //isAlreadyEnrolled is used to check if the student is already enrolled in the course or not
    const [playerData, setPlayerData]= useState(null)  //playerData is used to store the player data of the course with the id that matches the id in the URL
   
   
    const {allCourses,calculateRating, calculateNoOfLectures, calculateCourseDuration, calculateChapterTime, currency } = useContext(AppContext)
    const fetchCourseData = async() => {    
      const findCourse = allCourses.find(course => course._id === id)  ////fetchCourseData function will find the course with the id that matches the id in the URL. The course data will be set to the courseData state variable.If the id is equal to the course id then.
        setCourseData(findCourse);   
    }
    
    useEffect(() => {
        fetchCourseData()
    },[allCourses])  //whenever allCourses changes, the useEffect hook will run. It will call the fetchCourseData function to fetch the course data of the course with the id that matches the id in the URL.
    

  const toggleSection = (index) => {  //toggleSection function: open or close the chapter content
    setOpenSections((prev) => (      //prev is a fun: will return the previous state openSections
      {...prev, [index]: !prev[index]}    //...prev is used to copy the previous state
    ))
  } 
    
    



return courseData ? (            //if courseData is available, then display the course details

    <>
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
       <div className='absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70'> {/* background gradient from top to bottom*/} </div> 

       {/* left column */}
       <div className='max-w-xl z-10 text-gray-500'>
        <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>{courseData.courseTitle}</h1> 
        {/*courseTitle, courseDescription these are dummy data stroed in the assets.js file*/}
        <p className='pt-4 md:text-base text-sm'
        dangerouslySetInnerHTML={{__html: courseData.courseDescription.slice (0,200)}}></p>
                {/*dangerously is used to not show the html tags. slice(0,200) is used to display only 200 characters of the course description.*/}

    

{/* reviews and ratings, straight from courseCard. change : name of state the variable : courseData instead of course */} 
      
      <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
                    <p>{calculateRating(courseData)}</p>  {/*calculateRating function is used to calculate the rating of the course*/}
                   
                    <div className='flex'>        {/*this div is to display 5 stars*/}
                        {[...Array(5)].map((_, i) => (
                        <img key={i} src={i< Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt='' className='w-3.5 h-3.5' />  
                        ))}
                    </div>
                    <p className='text-blue-500'>({courseData.courseRatings.length} {courseData.courseRatings.length> 1 ?  'ratings' : 'rating'})</p> 

                    <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>
                   </div>
                    
                    <p className='text-sm'> Course by <span className='text-blue-600'> 
                        10 Minute School </span></p>
                       

{/*Course Stucture : */}                
 <div className='pt-8 text-gray-800'>
  <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2">Course Structure</h2>
  <div className='pt-5 space-y-4'>
   
    {/* courseContent, chapter: created in dummy data in assets.js file. It is an array of objects. chapter: for each course, it returns a div containing the chapter title */}
    {courseData.courseContent.map((chapter, index) => (
  <div key={index} className='border border-gray-200 shadow-sm bg-gray-50 hover:bg-gray-100 transition-colors duration-300 mb-2 rounded-lg'>
    
    {/* Chapter Header */}
    <div className='p-4 border-b border-gray-200 cursor-pointer ' onClick={() => toggleSection(index)}>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-3'>
         
          <img className={`transform transition-transform ${openSections[index] ? "rotate-180" : ""}`} //if openSections[index] is true, then rotate the arrow icon
          src={assets.down_arrow_icon} alt="arrowicon" />
          
          <p className='font-semibold md:text-lg text-base text-gray-800'>
            {chapter.chapterTitle}
          </p>
        </div>
        <p className='text-sm md:text-default text-gray-600 font-medium'>
          <span className='text-blue-600 font-semibold'>{chapter.chapterContent.length} lectures</span> - 
          <span className='text-gray-500'> {calculateChapterTime(chapter)}</span>
        </p>
      </div>
    </div>

    {/* Chapter Content */}
    <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? "max-h-[500px]" : "max-h-0"}`}> {/*if openSections[index] is true, then display the content, else display nothing*/}
      <ul className='space-y-3 cursor-pointer'>
        {chapter.chapterContent.map((lecture, i) => (
          <li key={i} className='flex items-start gap-3 hover:bg-gray-50 p-2 rounded-md transition-all duration-200'>
            <img src={assets.play_icon} alt='playicon' className='w-4 h-4 mt-1 flex-shrink-0' />
            <div className='flex justify-between items-start w-full'>
              <div>
                <p className='text-gray-800 font-medium'>{lecture.lectureTitle}</p>
                <div className='flex items-center gap-2 mt-1'>
                  {lecture.isPreviewFree && (
                    <p onClick={() => setPlayerData({ 
                      videoId: lecture.lectureUrl.split('/').pop() 
                    })}
                    className= 'text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded'>
                      Preview
                    </p>
                  )}
                  <span className='text-xs text-gray-500'>
                    {humanizeDuration(lecture.lectureDuration*60*1000, {units: ['h','m']})}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
))}
  </div>
</div>
<div className='py-20 text-sm md:text-default '>
  <h3 className='text-2xl font-bold text-gray-800'> Course Description </h3>
  <p className='pt-3 rich-text' 
        dangerouslySetInnerHTML={{__html: courseData.courseDescription}}></p>
</div>
     </div> 
       
     
     
     {/* right column */}   

{/*if playerData is available, then display the playerData, else display the courseThumbnail*/}
     <div className='max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]'>

      {
        playerData ? (
          <YouTube 
            videoId={playerData.videoId} 
            opts={{
              playerVars: {
                autoplay: 1
              }
            }} 
            iframeClassName='w-full aspect-video'
          />
        ) : <img src={courseData.courseThumbnail} alt='courseThumbnail' className='w-full h-auto rounded-lg' />
      }
        
        <div className='p-5'>
          <div className='flex items-center gap-2'>
          <img className='w-3.5' src={assets.time_left_clock_icon} alt="time left icon"/>
          <p className='text-red-500'> 5 days left at this price</p>
          </div>

{/*Course price and Discount*/}
<div className="space-y-2">
  <p className="text-3xl font-bold text-gray-900">
    {currency} {(courseData.coursePrice - courseData.discount * courseData.coursePrice/100).toFixed(0)}
  </p>
  <div className="flex items-center gap-3">
    <p className="text-lg text-gray-500 line-through">
      {currency}{courseData.coursePrice}
    </p>
    <p className="text-lg font-semibold text-green-600">
      {courseData.discount}% off
    </p>
    
  </div>
  

</div>
<button 
  className="group relative inline-flex w-full items-center justify-center md:mt-6 mt-4 px-6 py-3.5 
    font-semibold tracking-wide text-white bg-blue-600 rounded-lg overflow-hidden
    transition-all duration-300 ease-out
    hover:shadow-lg hover:shadow-blue-500/30
    active:scale-[0.98] active:duration-75"
>
  {/* Gradient background overlay */}
  <span className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-blue-500 opacity-0 
    group-hover:opacity-100 transition-all duration-500 ease-out"></span>
  
  {/* Shine effect */}
  <span className="absolute inset-0 transform translate-x-[-100%] group-hover:translate-x-[100%] 
    bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform 
    duration-1000 ease-out"></span>
  
  {/* Button content */}
  <span className="relative flex items-center justify-center gap-2">
    {isAlreadyEnrolled ? ('Already Enrolled') : (
      <>
        <span>Enroll Now</span>
        <svg 
          className="w-5 h-5 transform transition-all duration-300 ease-out
            group-hover:translate-x-1 group-hover:scale-110" 
          fill="none" 
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
             
          />
        </svg>
      </>
    )}
  </span>
</button>

<div className='pt-6'>
  <p className='md:text-xl text-lg font-medium text-gray-800'>What's in the course?</p>
  <ul className='ml-4 pt-2 text-sm md:text-default list-disc text-gray-500'>
    <li> Lifetime access </li>
    <li>Step-by-step, hands-on project guidance.</li>
    <li>Downloadable resources and source code.</li>
    <li>Quizzes to test your knowledge.</li>
    <li>Certificate of completion.</li>
  </ul>
</div>


          
        </div>
        
     </div>
     

      

       
        
    </div>
    <Footer />
    
    </>
)  : <Loading />         //if courseData is not there, then display the loading component
}

export default CourseDetails