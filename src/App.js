import { Fragment, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Params,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import BusinessForm from "./build Ai/buildAi";
import BusinessBot from "./Ai/ai";
import Website from "./Website/Website";



const router = createBrowserRouter([
  {path: '/', element: <Website/>},
  {path: '/create', element: <BusinessForm/>},
  {path: '/bot/:businessId', element: <BusinessBot/>}

]);


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;