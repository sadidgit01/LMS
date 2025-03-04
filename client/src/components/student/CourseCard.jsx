import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {

    const{currency}= useContext(AppContext)
return (
    <Link to={'/course/' + course._id} onClick={()=>scrollTo(0,0)} className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg' > 
        <img className='w-full' src={course.courseThumbnail} alt="" />
        <div className='p-3 text-left'>
            <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
            <p className='text-grey-500'>{course.educator.name}</p>
            <div className='flex items-center space-x-2'>
                <p>4.5</p>
                <div className='flex'>        {/*this div is to display 5 stars*/}
                    {[...Array(5)].map((_, i) => (
                    <img key={i} src={assets.star} alt='' className='w-3.5 h-3.5' />  
                    ))}
                </div>
                <p className='text-gray-500'>22</p>
            </div>
            <p className='text-base font-bold text-gray-800'>{currency}  {(course.coursePrice - course.discount * course.coursePrice/100).toFixed(0)}</p>
        </div>
        
    </Link>
)
}

export default CourseCard