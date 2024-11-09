import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Layout from "./layout/Layout";
import Portfolio from "./Pages/Portfolio";
import Landing from "./Pages/Landing";
import BlogWeb from "./Pages/BlogWeb";
import Business from "./Pages/Business";
import Ecom from "./Pages/Ecom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/blog" element={<BlogWeb />} />
      <Route path="/business" element={<Business />} />
      <Route path="/ecom" element={<Ecom />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
