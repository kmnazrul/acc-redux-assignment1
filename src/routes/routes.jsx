import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddBlog from "../pages/AddBlog";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SingleBlog from "../pages/SingleBlog";
import UpdateBlog from "../pages/UpdateBlog";
import ErrorPage from "./ErrorPage";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/:id",
        element: <SingleBlog />,
      },
      {
        path: "update/:id",
        element: <UpdateBlog />,
      },
      {
        path: "/new",
        element: (
          <ProtectedRoute>
            <AddBlog />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;

/* 

*/

/* 
createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="blogs/:id" element={<SingleBlog />} />
      <Route
        path="new"
        element={
          <ProtectedRoute>
            <AddBlog />
          </ProtectedRoute>
        }
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
*/
