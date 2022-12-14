import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { ReactComponent as CrownSvg } from "../../assets/crown.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import { UserContext } from "../../context/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../context/cart.context"

import {
   NavigationContainer,
   LogoContainer,
   NavLinks,
   NavLink,
} from "./navigation.styles.jsx"

const Navigation = () => {
   const { currentUser } = useContext(UserContext)
   const { isCartOpen } = useContext(CartContext)

   return (
      <>
         <NavigationContainer>
            <LogoContainer to="/">
               <CrownSvg className="logo" />
            </LogoContainer>
            <NavLinks>
               <NavLink to="/shop">SHOP</NavLink>
               {currentUser ? (
                  <NavLink as='span' onClick={signOutUser}>
                     SIGN OUT
                  </NavLink>
               ) : (
                  <NavLink to="/auth">SIGN IN</NavLink>
               )}
               <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
         </NavigationContainer>
         <Outlet />
      </>
   )
}

export default Navigation
