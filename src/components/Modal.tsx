import { TypeModal, typesModal } from "../constants/TypeModal";
import { MouseEvent } from "react";
import '../styles/modal.css';
export type PropsModal = {
    title:string;
    message:string;
    type:TypeModal,
    textButton:string,
    handleAccept:(e:MouseEvent<HTMLButtonElement>)=> void;
}
export const Modal = ({title, message, textButton, type, handleAccept}:PropsModal) => {
    
    return (
        <article className="modal-background">
            <article className={`modal modal-${typesModal[type]}`}>
                <h4>{title}</h4>
                <section className="modal-message">
                    <p>{message}</p>
                </section>
                <button onClick={handleAccept} className='modal-boton'>{textButton}</button>
            </article>    
        </article>
        
    )
}