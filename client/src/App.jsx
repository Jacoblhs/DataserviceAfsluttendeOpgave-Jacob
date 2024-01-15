import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import './App.css'
import Layout from "./layout/Layout";
import Home from "./views/Home";
import Viborghaveservice from "./views/Viborghaveservice/Viborghaveservice";
import Reviews from "./views/Viborghaveservice/Reviews";
import HaveserviceAdmin from "./views/Admin/HaveserviceAdmin";
import ReviewsAdmin from "./views/Admin/ReviewsAdmin";
import ReviewsCreate from "./views/Admin/ReviewsCreate";
import News from "./views/News/News";

function App () {

    // ROUTER PROVIDER
    const router = createBrowserRouter(
  
      createRoutesFromElements(
        <>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path="haveservice" element={ <Viborghaveservice /> } />
            <Route path="adminHaveservice" element={ <HaveserviceAdmin /> } />
            <Route path="reviews" element={ <Reviews /> } />
            <Route path="reviewsAdmin" element={ <ReviewsAdmin /> } />
            <Route path="reviewsCreate" element={ <ReviewsCreate /> } />
            <Route path="News" element={ <News /> } />
          </Route>
        </>
      )
    )
  
    return (
      <section>
        <RouterProvider router={ router } />
        {/* <h1>Forsiden</h1> */ }
      </section>
  
  
    )
  }
  
  export default App  