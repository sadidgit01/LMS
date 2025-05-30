import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'   
import { AppContext } from '../../context/AppContext'

const Navbar = () => {

   const {navigate , isEducator} = useContext(AppContext);  //const navigate has been destructured from AppContext  

const isCourseListPage = location.pathname.includes('/course-list');

const {openSignIn} = useClerk();   //"Create Account" button functionality
const {user} = useUser();  //user is signed up or not




    return (
        <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 
        'bg-cyan-100/70'}`}> 
      <img onClick={()=> navigate('/')} src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer'/>
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
            <div className='flex items-center gap-5'>
                { user &&            // if user is signed up then only display "Become Educator" button and "My Enrollments" link otherwise display nothing</>
                 <>
                 <button onClick={()=>{navigate('/Educator')}}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button> {/*if user is educator then display "Educator Dashboard" otherwise "Become Educator"*/}
                 | <Link to='/my-enrollments'>My Enrollments</Link>
                </>
                }
            </div>  
            
           { user ? <UserButton /> :     // if user is signed up, display userButton     otherwise display create account button
            
            <button onClick={()=> openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
            }
            
    </div>
   
    {/* For Mobile Navbar */}
    <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
        
        { user &&                                                                            //user && </> is used to display the content when user is logged in
                 <>
                 <button onClick={()=>{navigate('/Educator')}}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
                 | <Link to='/my-enrollments'>My Enrollments</Link>
                </>
                }
        </div> 
       
       { 
         user ? <UserButton /> :                                
        <button onClick={()=>openSignIn()}><img src={assets.user_icon} alt="" /></button>
       }
    
        </div>      
    
    </div>
)
}

export default Navbar