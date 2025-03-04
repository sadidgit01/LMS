import React, { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate= useNavigate();  //useNavigate is a hook that allows us to navigate to different pages in our app. We will use this hook to navigate to the course details page when a course is clicked on. We will pass this hook to the value object that we will pass to the AppContext.Provider component. This will allow us to access the navigate hook in any component that is wrapped in the AppContextProvider component.
  
  
  const [allCourses, setAllCourses] = useState([]);      //when we run the program, it will fetch all the courses from the dummyCourses array and set it to the allCourses state. its empty at first but when the program runs, it will be filled with the dummyCourses array.

  // Fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  //Functon to calculate the average rating of a course
  const calculateRating =(course) => {
    if (course.courseRAting.length === 0){
        return 0;
    }
    let totalRating = 0;
    
  }

  // Use useEffect to fetch courses on component mount 
  useEffect(() => {
    fetchAllCourses();
  }, []);

const value = {
    currency,
    allCourses, navigate
    
};

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};