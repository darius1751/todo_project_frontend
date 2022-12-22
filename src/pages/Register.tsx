import { FormEvent } from "react";
import { ColumnCredentialData } from "../components/ColumnCredentialData";
import { ColumnPersonalData } from "../components/ColumnPersonalData";
import "../styles/register.css";
export const Register = () => {
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="form-register">
        <ColumnPersonalData/>
        <ColumnCredentialData/>        
        <br />
      </form>
    </div>
  );
};
