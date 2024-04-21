import { NavLink, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div>

      <NavLink replace>Sample1</NavLink>
      <NavLink to='sample2'>Sample2</NavLink>
      <Outlet />
    </div>
  )
}
export default About