import React, { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration"; 

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate(); // useNavigate is a hook that allows us to navigate to different pages in our app.

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState([true]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Fetch all courses. This function will fetch all the courses from the server and set the allCourses state variable with the fetched courses. We will use dummy data for now. We will replace this with actual data later.
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // Function to calculate the average rating of a course
  const calculateRating = (course) => {  //course is an object that contains the course details. it is passed as an argument to the calculateRating function.it has been created
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  // Function to calculate course Chapter Time
  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.forEach((lecture) => {
      time += lecture.lectureDuration;
    });
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // Function to calculate course Duration
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // Function to calculate number of Lectures in a course
  const claculateNoOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLecturesectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  };

  // Function to fetch user enrolled courses
  const fetchUserEnrolledCourses = async () => {
    setEnrolledCourses(dummyCourses); //this setEnrolledCourses function will set the enrolledCourses state variable with the fetched courses by calling the fetchUserEnrolledCourses function.
  };


  // Use useEffect to fetch courses on component mount
  useEffect(() => {
    fetchAllCourses()
    fetchUserEnrolledCourses()
  }, []);

  
  //value object : these are functions and state variables that we want to pass to the child components. Using the AppContext.Provider component.So that we can access these functions and variables in any other components. 
  const value = { 
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateCourseDuration,
    claculateNoOfLectures,
    enrolledCourses,
    fetchUserEnrolledCourses
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider> // The AppContextProvider component will wrap the entire application in the App.jsx file. This will allow us to access the values passed to the AppContext.Provider component in any component that is a child of the AppContextProvider component.
  );
};