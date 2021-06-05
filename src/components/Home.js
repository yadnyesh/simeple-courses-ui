import React from "react";
import { Jumbotron, Container, Button} from 'reactstrap';

const Home = () => {
    return(
       <div>
           <Jumbotron className="text-center bg-secondary">
               <h1 className="display-3">Yadnyesh React.js restart</h1>
               <p>Learn React JS with Spring Boot</p>
           <Container>
                <Button color="primary" outline>Press Me</Button>{' '}
           </Container>
           </Jumbotron>
       </div> 
    );
};

export default Home;