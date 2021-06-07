import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Button, Container, Form, FormGroup, Label, Input } from "reactstrap";
import base_url from "../api/bootapi";

const AddCourse = () => {

    useEffect(() => {
        document.title = "Add a new Course"
    }, []);

    const [course, setCourse] = useState({});

    const handleCourseSubmit = (e) => {
        createNewCourse(course);
        e.preventDefault();
    };

    const createNewCourse = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response);
                console.log("Success!");
            },
            (error) => {
                console.error(error);
                console.error("Some Error happened");
            }    
        );
    }


    return (
        <Fragment>
            <h1 className="text-center my-3">Fill the course details</h1>
            <Form onSubmit={handleCourseSubmit}>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input type="text" 
                           placeholder="Enter here" 
                           name="courseId" 
                           id="courseId"
                           onChange={(e) => {
                             setCourse({...course, courseId:e.target.value})
                           }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" 
                           placeholder="Title of the course" 
                           name="title" 
                           id="title" 
                           onChange={(e) => {
                             setCourse({...course, title:e.target.value})
                           }}
                           />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" 
                            placeholder="Description of the course" 
                            name="description" 
                            id="description" 
                            style={{height:100}}
                            onChange={(e) => {
                                setCourse({...course, description:e.target.value})
                              }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>

    );
};

export default AddCourse;