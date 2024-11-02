'use client'
import { NavbarComponent } from '../Navbar/Navbar'
export const Header = () => {
  return (
    <header className="fixed top-0 z-30 p-3 w-full m-auto ">
      <NavbarComponent />
    </header>
  )
}
