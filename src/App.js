import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import{Button} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';



function App() {

  const btnHandle = () => {
    toast.success("Done!");
  }

  return (
      <div>
        <ToastContainer />
        <h1>Simple Application</h1>
        <Button color="primary" outline onClick={btnHandle}>
          First React Button
        </Button>
      </div>
  );
}

export default App;
