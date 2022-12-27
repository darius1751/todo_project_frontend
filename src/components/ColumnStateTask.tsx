import { State } from "../models";
type PropsColumnStateTask = {
    state:State
}
export const ColumnStateTask = ({state}:PropsColumnStateTask) => {
    return (
    <section className="column-state-task">
        <h4>{state.name}</h4>
    </section>)
}