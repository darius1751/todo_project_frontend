import { useEffect, useState } from "react"
import { PropsModal } from "../components/Modal";
import { TypeModal } from "../constants/TypeModal";

export type UseModalData = PropsModal;
export type UseModalResponse = [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>, 
    UseModalData,
    React.Dispatch<React.SetStateAction<PropsModal>>,
    Function
];
const initialModal:UseModalData = {
    message:'Initial fu',
    textButton:'Accept',
    title:'',
    type:TypeModal.INFO,
    handleAccept:(e) =>{ 
        console.log('OK')
    }
}
export const useModal = ():UseModalResponse => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [stateModal, setStateModal] = useState<UseModalData>(initialModal);
    useEffect(() => {
        setStateModal({
            ...stateModal,
            handleAccept: (e) => {
                setVisibleModal(false);
            }
        })
    },[])
    const activeModal = (modalData:UseModalData) => {
        setVisibleModal(true);
        setStateModal(modalData);
    }
    return [
        visibleModal,
        setVisibleModal,
        stateModal,
        setStateModal,
        activeModal
    ]
}