export const isValidEmail = (email:string):never | void =>{
    const validEmail = /^[\w\W]+@[\w\W]+\.(com|es|co)$/;
    if(!validEmail.test(email))
        throw new Error(`Email not valid`);
}