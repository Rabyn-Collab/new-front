import { Outlet } from "react-router"
import Header from "./Header"
import ScrollToTop from "../features/shared/ScrollToTop"

const RootLayOut = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
    </div>
  )
}
export default RootLayOut