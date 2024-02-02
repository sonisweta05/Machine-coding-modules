import "./App.css";
import Home from "./Home Page/Home";
import SideBar from "./SideBar";
import MultiSelect from "./multi-select/MultiSelect";
import Notes from "./notes/Notes";
import Error from "./common/ErrorPage/Error";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-200">
        <Main>
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/multi-select" element={<MultiSelect />}></Route>
            <Route path="/notes" element={<Notes />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Main>
      </div>
    </>
  );
}

export default App;
