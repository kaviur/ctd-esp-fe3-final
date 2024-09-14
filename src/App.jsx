import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Footer from "./Components/layouts/main/Footer";
import PageNotFound from "./Routes/PageNotFound";
import { Toaster } from "react-hot-toast";
import MainLayout from "./Components/layouts/main/MainLayout";

function App() {
  return (
    <div className="App relative min-h-screen h-full w-full flex flex-col justify-between ">
      <div className="absolute z-[-2] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_top,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]"></div>

      <div className="absolute z-[-2] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_top,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_100%,#000_30%,transparent_100%)]"></div>

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/home"} element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
