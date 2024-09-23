
import NavBar from "./components/NavBar";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import TopicPage from "./pages/TopicPage";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />
    },
    {
      path: "/topic-page",
      element: <TopicPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ])
  
function App() {


    return (
      <div className='app'>
        <NavBar/>
        <RouterProvider router={router} />
      </div>
    )
  }

  export default App;
  