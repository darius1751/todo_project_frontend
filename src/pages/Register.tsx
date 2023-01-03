import { FormEvent } from "react";
import { NavLink } from "react-router-dom";
import { ColumnCredentialData } from "../components/ColumnCredentialData";
import { ColumnPersonalData } from "../components/ColumnPersonalData";
import { isValidPassword, isValidEmail, isValidPhone } from "../helpers/validations";
import { isValidName } from "../helpers/validations/validName";
import { useForm } from "../hooks/useForm";
import { Person, Credential } from "../models";
import { initialPerson } from "../store/slices/personSlice";

import "../styles/register.css";

export type CredentialForm = Credential & { confirmPassword: string };

const initialCredential: CredentialForm = {
  username: "",
  password: "",
  confirmPassword: "",
};
export const Register = () => {

  const [personalData,  handleChangePersonalData] = useForm<Person>(initialPerson);
  const [credential, handleChangeCredentialData] =  useForm<CredentialForm>(initialCredential);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    const {name, email,phone = ''} = personalData;
    const {password, confirmPassword, username} = credential;
    try{
      isValidName(name);
      isValidName(username);
      isValidPassword(password, confirmPassword);
      isValidEmail(email);
      isValidPhone(phone);
      
    }catch(exception:any){
      console.log({exception})
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="form-register">
        <ColumnPersonalData personalData={personalData} handleChangePersonalData={handleChangePersonalData}/>
        <ColumnCredentialData credential={credential} handleChangeCredentialData={handleChangeCredentialData}/>
        <input type="submit" value={'Registrarme'} className='form-btn-register' />
        <br />
        <NavLink to='/login' style={{ marginRight: '20%', marginTop: '5px', display: 'inline-block' }}>
          Ya tengo cuenta
        </NavLink>
      </form>
    </div>
  );
};
