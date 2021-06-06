import React, { useState } from 'react';
import Course from './Course';

const AllCourses = () => {

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
                courses.length > 0 ? courses.map((course) => <Course course={course}/>) 
                : "Sorry No Courses at this time"
            }
        </div>
    );
}


export default AllCourses;
