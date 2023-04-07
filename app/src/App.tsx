import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/DashBoard";
import Logs from "./pages/Logs";
import Upload from "./pages/Upload";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/logs",
    element: <Logs />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
