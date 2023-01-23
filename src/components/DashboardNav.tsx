import { NavLink } from "react-router-dom"
import '../styles/dashboard-nav.css';
export const DashboardNav = () => {
    return(
        <nav className="dashboard-nav">
            <NavLink to = {'/dashboard'}>
                Inicio
            </NavLink>
            <NavLink to = {'/dashboard/create-task'}>
                Crear tarea
            </NavLink>
        </nav>
    )
}