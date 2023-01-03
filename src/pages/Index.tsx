import '../styles/main.css';
import {NavLink} from 'react-router-dom';
import { Footer } from '../components/Footer';
export const Index = () => {
    return (
        <div className="index">
            <header>
                <h2>TODO List</h2>
            </header>
            <article className="main-index">
                <p>
                    En esta aplicacion podras tener un historial, de todas tus actividades a realizar,
                    para tener, en que estado se encuentra y en que momento fueron creadas y actualizadas por ti
                    a traves del tiempo, podras personalizar tambien los estados de cada tarea a tu gusto.
                </p>

                    <NavLink to='/login'  className='btn-login'>Iniciar sesion</NavLink>
            </article>


            <Footer/>
        </div>
    )
}