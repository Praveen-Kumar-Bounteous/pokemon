import { NavLink } from "react-router-dom"
import { Button } from "./ui/button"

const navItems = [
    { to:"/", label: "Home"},
    { to:"/poke", label: "Pokemon"}
]

function NavigationBar() {
  return (
    <nav className="border-b bg-card">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-8 p-4">
            {navItems.map((item) => (
                <NavLink key={item.to} to={item.to}>
                    {({ isActive }) => (
                        <Button variant={isActive ? "default" : "outline"}>
                            {item.label}
                        </Button>
                    )}
                </NavLink>
            ))}
        </div>
    </nav>
  );
}

export default NavigationBar