export const isValidPhone = (phone:string) => {
    const validPhone = /^\d{6,}$/;
    if(!validPhone.test(phone))
        throw new Error(`Phone is not valid`);
}