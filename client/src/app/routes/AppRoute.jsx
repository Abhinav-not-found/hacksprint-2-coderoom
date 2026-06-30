import { createBrowserRouter } from "react-router"
import Room from "@/pages/Room"
import Home from "../../pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/room/:roomCode",
    element: <Room />,
  },
])

export default router
