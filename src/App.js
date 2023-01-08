import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Car from "./components/Car/Car";
import Contact from "./components/Contact/Contact";
import Details from "./components/Details/Details.js";
import Error from "./components/Error/Error";
import { auth } from "./components/Firebase/Firebase";
import Home from "./components/Home/Home";
import Items from "./components/Items/Items";
import Layouts from "./components/Layouts";
import LoginMain from "./components/Login/LoginMain";
import { getLocalItem, setUser } from "./components/redux/slice/CarSlice";

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {

    const user = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email))
        dispatch(getLocalItem(user.email))
      }
      else {
        dispatch(setUser())
      }
    })

  }, [])


  return (
    <div className="App">
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<Items />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginMain />} />
          <Route path="/car" element={<Car />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
