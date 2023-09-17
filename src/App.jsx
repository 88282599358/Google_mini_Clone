import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResult  from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";
import "./App.css";

function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/*exact to make default page load and in element add which page you want to make default*/}
            <Route path="/:query/:startIndex" element={<SearchResult />} />
          </Routes>
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
