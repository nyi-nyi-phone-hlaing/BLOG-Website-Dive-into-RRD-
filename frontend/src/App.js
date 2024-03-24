import Main from "./layouts/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  NewsFeed,
  CreatePost,
  PostDetail,
  PostEdit,
  Error,
  Auth,
} from "./pages/PagesExport";
import { loader as postsLoader } from "./pages/NewsFeed";
import { loader as postDetailLoader } from "./pages/PostDetail";
import { loader as logoutLoader } from "./pages/Logout";
import { action as postDeleteAction } from "./pages/PostDetail";
import { action as createPostAction } from "./components/PostForm";
import { action as editPostAction } from "./components/PostForm";
import { action as authAction } from "./pages/Auth";
import { checkTokenLoader, tokenLoader } from "./util/auth";
const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement: <Error />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <NewsFeed />, loader: postsLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
        loader: checkTokenLoader,
      },
      { path: "/auth", element: <Auth />, action: authAction },
      { path: "/logout", loader: logoutLoader },
      {
        path: ":id",
        id: "post-detail",
        loader: postDetailLoader,
        children: [
          {
            index: true,
            element: <PostDetail />,
            action: postDeleteAction,
          },
          {
            path: "post-edit",
            element: <PostEdit />,
            action: editPostAction,
            loader: checkTokenLoader,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
