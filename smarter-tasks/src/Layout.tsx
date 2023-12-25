import Header from './components/Header';
import { Outlet } from "react-router-dom"
import AccountLayout from './layouts/accounts';
const Layout = () => {

  return (
    <>
      <AccountLayout />
    </>
  )
}
export default Layout;