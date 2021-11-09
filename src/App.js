import Headers from "./components/headers";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {
  return (
    <>  
      <Router>
        <Routes>
          <Route  path="/" element={<Headers/>}/>
          <Route  path="/signin" element={<SignIn/>}/>
          <Route  path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
