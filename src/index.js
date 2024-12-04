import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import Stats from "./components/Stats";
import Services from "./components/Services";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <About />
    <Services />
    <Stats />
    <Team />
    <WhyUs />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
