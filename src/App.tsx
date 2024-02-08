import "./App.css";
import BlogDetail from "./Pages/BlogDetail";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Bcard from "./Components/Bcard";
import Aside from "./Components/Aside";

function App() {
  return (
    <main className="flex flex-col justify-center items-center p-4 h-screen ">
      <div className="p-[15px]">
        <Bcard />

        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog-detail/:id" element={<BlogDetail />}></Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
