import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Quiz from "./routes/Quiz";
import QuizQuestion from "./routes/Quiz/QuizQuestion";
import QuizStart from "./routes/Quiz/QuizStart";
import QuizFinish from "./routes/Quiz/QuizFinish";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
    children: [
      {
        path: "/quiz/:quizId",
        element: <QuizQuestion />,
      },
      {
        path: "/quiz/finish",
        element: <QuizFinish />,
      },
      {
        path: "/quiz/",
        element: <QuizStart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
