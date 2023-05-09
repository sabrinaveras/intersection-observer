import { createBrowserRouter } from "react-router-dom"
import { Template } from "./template"
import { InfiniteScroll } from "./infinite-scroll"

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Template />
  },
  {
    path: "/infinite-scroll",
    element: <InfiniteScroll />
  }
])