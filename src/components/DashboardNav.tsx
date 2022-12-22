import { NavLink } from "react-router-dom"

export const DashboardNav = () => {
    return(
        <nav>
            <NavLink to = {'/dashboard'}>
                Inicio
            </NavLink>
            <NavLink to = {'/dashboard/create-type'}>
                Crear tipos
            </NavLink>
        </nav>
    )
}