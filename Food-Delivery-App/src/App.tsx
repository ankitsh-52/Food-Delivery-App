// import React from "react";
import "./public/app.css";
// import LikeButton from "./components/likeButton";
import AboutPage from "./components/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage"

function App() {
  return (
    // <div className="app">
    //   <Header />
    //   <Body />
    //   <LikeButton />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        {/* <Route path="/" element={<Body />}/> */}
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

// export const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element : <App />
//   },
//   {
//     path : "/about",
//     element : <AboutPage />
//   }
// ]);

export default App;

