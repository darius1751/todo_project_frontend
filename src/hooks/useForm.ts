import { ChangeEvent, useState } from "react";

export type UseFormData<T> = {
    initialValue:T;    
};

export type UseFormResponse<T> = [
    T,
    ( e:ChangeEvent<HTMLInputElement> ) => void
];

export const useForm = <T> ( initialValue:T ): UseFormResponse<T> => {
    
    const [ data, setData ] = useState<T>(initialValue);
    const handleChange = ( e:ChangeEvent<HTMLInputElement> ) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    return [
        data,
        handleChange
    ]
}