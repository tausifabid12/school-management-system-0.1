import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import About from '../pages/about/About';
import Admission from '../pages/admission/Admission';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      }, {
        path: '/admission',
        element: <Admission />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
