import React, { useEffect, useState } from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';
import { isTemplateElement } from '@babel/types';
import { ToastContainer, toast } from 'react-toastify';

const AllCourses = () => {

    useEffect(() => {
        document.title = "All Courses";
        getAllCoursesFromApi();
    }, []);

    const getAllCoursesFromApi = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response);
                toast.success('Courses loaded from the server',{
                    position: "bottom-center"
                });
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error('Error has occurred')
            }
        );
    }

    const [courses, setCourses] = useState([
        {title:"Java Course", description: "Java for beginners"},
        {title:"Kafka Course", description: "Kafka for beginners"},
        {title:"MySQL Course", description: "MySQL for beginners"},
        {title:"MongoDB Course", description: "MongoDB for beginners"}
    ])

    return(
        <div>
            <h1>Courses Available</h1>
            <p>List of Courses</p>
            {
                courses.length > 0 ? courses.map((course) => <Course key={course.courseId} course={course}/>) 
                : "Sorry No Courses at this time"
            }
        </div>
    );
}


export default AllCourses;
