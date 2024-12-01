'use client'
import { NavbarComponent } from '../Navbar/NavbarComponent'

export const Header = () => {
  return (
    <header className="fixed top-0 z-40 p-3 w-full m-auto ">
      <NavbarComponent />
    </header>
  )
}
