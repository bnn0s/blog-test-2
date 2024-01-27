import "./App.css";
import BlogDetail from "./Pages/BlogDetail";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="p-[15px]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog-detail/:id" element={<BlogDetail />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
