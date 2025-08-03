import { createBrowserRouter } from "react-router";
import Layout from './layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Services from './Pages/Services';
import Contact from './Pages/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />

      },
      {
        path: "/blog",
        element: <Blog />

      },
      {
        path: "/services",
        element: <Services />

      },
      {
        path: "/contact",
        element: <Contact />
      }

    ],
  },
]);

export default router;