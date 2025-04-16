import React, { useEffect, useRef, useState } from 'react'
import uniqid from 'uniqid'
import Quill from 'quill'

const AddCourse = () => {

    const quillRef = useRef(null)  // This will hold the Quill editor instance
    const editorRef = useRef(null)   // This will hold the reference to the editor DOM element

    const [courseTitle, setCourseTitle] = useState('')
    const [coursePrice, setCoursePrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [image, setImage] = useState(null)
    const [chapters, setChapters] = useState([]);

    const [showPopup, setShowPopup] = useState(false);
    const [currentChapterId, setCurrentChapterId] = useState(null);
    const [lectureDetails, setLectureDetails] = useState({
        lectureTitle: '',
        lectureDuration: '',
        lectureUrl: '',
        isPreviewFree: false,
      });
    
      useEffect(() => {
        // Initiate Quill only once
        if (!quillRef.current && editorRef.current) {
          quillRef.current = new Quill(editorRef.current, {
            theme: 'snow',
          });
        }
      }, []);
    
  
return (
    <div className='h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
        <form className='flex flex-col gap-8 w-full max-w-xl'>
            <div className='flex flex-col gap-1'>
                <p>Course Title</p>
                <input
                    onChange={(e) => setCourseTitle(e.target.value)}
                    value={courseTitle}
                    type="text"
                    placeholder='Enter Course Title'
                    className='border rounded px-3 py-2 outline-none focus:ring focus:ring-blue-200'
                    required
                />
            </div>
            <div className='flex flex-col gap-1'>
                <p>Course Description</p>
                <div ref={editorRef}></div>
            </div>

            <div>
                
            </div>
        </form>
    </div>
)
}

export default AddCourse