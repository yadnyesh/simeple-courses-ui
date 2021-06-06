import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import { Button } from 'reactstrap';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';

function App() {

  const btnHandle = () => {
    toast.success("Done!");
  }

  return (
      <div>
        <Home />
        <ToastContainer />
        <AllCourses />
        <AddCourse />
      </div>
  );
};

export default App;
