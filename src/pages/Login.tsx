import { FormEvent, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { Credential } from "../models";
import '../styles/login.css';
import { PersonSlice } from "../store/slices/personSlice";
import { PersonStore } from "../store";
import { httpLoginHelper } from "../helpers/http/httpLoginHelper";
import { NavLink, useNavigate } from "react-router-dom";


export const initCredential:Credential = {
    username:'',
    password:''
}
export const Login = ( ) => { 

    const [credential, handleChange] = useForm<Credential>(initCredential);
    const {person} = useSelector<PersonStore, PersonSlice>((state) => state.personStore);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(person.id){
            console.log("Listos para ir al dashboard",{person}) 
            navigate('/dashboard');
        }
            
    },[person])
    const handleSubmit = ( e:FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        httpLoginHelper(credential, dispatch);        
        // dispath(login({name:'Luis', email:'luis@gmail.com'}));
    }

    return (
        
            <div className="login">
                <form onSubmit = {handleSubmit} className='form'>
                    <label htmlFor="username" className="form-label">Username:</label>
                    <br />
                    <input type={"text"} name="username" value={ credential.username } onChange={handleChange} placeholder='Ingrese su usuario' className="form-input-text"/>
                    <br />
                    <label htmlFor="password" className="form-label">Password</label>
                    <br />
                    <input type={"password"} name="password" value={ credential.password } onChange={handleChange} placeholder='Ingrese su contraseña' className="form-input-text"/>
                    <br />
                    <br />
                    <input type={'submit'} value='Iniciar sesion' className="form-btn"/>
                    <br />
                    <small>
                        <NavLink to='/register'>Registrarme ahora</NavLink>
                    </small>                  
                </form>
            </div>
            
    )
}