import Main from "./layouts/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  NewsFeed,
  CreatePost,
  PostDetail,
  PostEdit,
  Error,
} from "./pages/PagesExport";
import { loader as postsLoader } from "./pages/NewsFeed";
import { loader as postDetailLoader } from "./pages/PostDetail";
import { action as postDeleteAction } from "./pages/PostDetail";
import { action as createPostAction } from "./components/PostForm";
import { action as editPostAction } from "./components/PostForm";
const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { index: true, element: <NewsFeed />, loader: postsLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
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
