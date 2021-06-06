import React from "react";
import { Fragment } from "react";
import { Button, Container, Form, FormGroup, Label, Input } from "reactstrap";

const AddCourse = () => {
    return (
        <Fragment>
            <h1 className="text-center my-3">Fill the course details</h1>
            <Form>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input type="text" placeholder="Enter here" name="courseId" id="courseId"/>
                </FormGroup>
                <FormGroup>
                    <Label for="courseName">Course Title</Label>
                    <Input type="text" placeholder="Title of the course" name="courseName" id="courseName" />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Title</Label>
                    <Input type="textarea" 
                            placeholder="Description of the course" 
                            name="description" 
                            id="description" 
                            style={{height:100}}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>

    );
};

export default AddCourse;