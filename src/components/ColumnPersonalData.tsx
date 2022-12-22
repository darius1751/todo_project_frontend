import { useForm } from "../hooks/useForm";
import { Person } from "../models";
import { initialPerson } from "../store/slices/personSlice";
export const ColumnPersonalData = () => {
    const [person, setPerson, handleChangePersonalData] = useForm<Person>(initialPerson);
    return (
        <section className="personal-data">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Ingrese su nombre"
            id="name"
            className="form-input-text"
            value={person.name}
            onChange={handleChangePersonalData}
          />
          <br />
          <label htmlFor="email" className="form-label">
            email
          </label>
          <br />
          <input
            type={"email"}
            name="email"
            placeholder="Ingrese su email"
            id="email"
            className="form-input-text"
            value={person.email}
            onChange={handleChangePersonalData}
          />
          <br />
          <label htmlFor="phone" className="form-label">
            phone
          </label>
          <br />
          <input
            type="number"
            name="phone"
            placeholder="Ingrese su telefono"
            id="phone"
            className="form-input-text"
            value={person.phone}
            onChange={handleChangePersonalData}
          />
          <br />
        </section>
    )
}