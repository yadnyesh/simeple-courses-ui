import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import { Button,Container, Row, Col } from 'reactstrap';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header'
import Menu from './components/Menu';
import {BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom';

function App() {

  const btnHandle = () => {
    toast.success("Done!",{
      position:"top-center"
    });
  }

  return (
      <div>
        <Router>
          <Container>
            <Header />
            <ToastContainer />
              <Row>
                <Col md={4}>
                  <Menu />
                </Col>
                <Col md={8}>
                  <Route path="/" component={Home} exact/>
                  <Route path="/addcourse" component={AddCourse} exact/>
                  <Route path="/viewcourse" component={AllCourses} exact/>
                </Col>
              </Row>
          </Container>
        </Router>  
      </div>
  );
};

export default App;
