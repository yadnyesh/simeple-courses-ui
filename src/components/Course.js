import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from 'reactstrap';

const Course = ({course}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
            </CardBody>
            <Container className="text-center">
                <Button color="warning">Update</Button>
                <Button color="danger ml-3">Delete</Button>
            </Container>
        </Card>
    )
}

export default Course;