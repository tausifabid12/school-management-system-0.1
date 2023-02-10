import './App.css';

import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className="max-w-[1500px] mx-auto  bg-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
