import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrownSvg } from "../../assets/crown.svg"

import "./navigation.styles.scss"

const Navigation = () => {
   return (
      <>
         <div className="navigation">
            <Link className="logo-container" to="/">
               <CrownSvg className="logo" />
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to="/shop">
                  SHOP
               </Link>
               <Link className="nav-link" to="/auth">
                  sign-in
               </Link>
            </div>
         </div>
         <Outlet />
      </>
   )
}

export default Navigation
