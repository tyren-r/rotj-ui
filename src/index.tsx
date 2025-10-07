import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "./components/pages/about-page/AboutPage";
import DocumentationPage from "./components/pages/documentation-page/DocumentationPage";
import SearchPage from "./components/pages/search-page/SearchPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <Navbar />
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/docs" element={<DocumentationPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
