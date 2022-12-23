import {Credential} from '../models';
import {useForm} from '../hooks/useForm';
import {KeyboardEvent, useState} from 'react';
import { CredentialForm } from '../pages/Register';

type PropsColumnCredentialData = {
  credential: CredentialForm,
  handleChangeCredentialData: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ColumnCredentialData = ({credential, handleChangeCredentialData}:PropsColumnCredentialData) => {

    
    const [equals, setEquals] = useState('');

    const handleKeyUp = (e:KeyboardEvent<HTMLInputElement>) => {
        const {password, confirmPassword} = credential;
        if(confirmPassword != '')
          setEquals(confirmPassword === password?'equals':'not_equals');
        else
          setEquals('');            
    }

    return (
        <section className="credential-data">
          <label htmlFor="username" className="form-label">
            username
          </label>
          <br />
          <input
            type="text"
            name="username"
            value={credential.username}
            placeholder="Ingrese su username"
            id="username"
            className="form-input-text"
            onChange={handleChangeCredentialData}
          />
          <br />
          <label htmlFor="password" className="form-label">
            password
          </label>
          <br />
          <input
            type={"password"}
            name="password"
            placeholder="Ingrese su password"
            id="password"
            className="form-input-text"
            onChange={handleChangeCredentialData}
            value={credential.password}
            onKeyUp={handleKeyUp}
          />
          <br />
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirme su contraseña"
            id="confirmPassword"
            onChange={handleChangeCredentialData}
            onKeyUp= {handleKeyUp}
            value={credential.confirmPassword}
            className={`form-input-text ${equals}`}
          />
        </section>
    )
}