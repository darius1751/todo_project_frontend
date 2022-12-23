
export const isValidPassword = (password:string, confirmPassword:string) => {
    const validPassword = /^\w{5,}\d{1,}\W+/;
    const MAX_LENGHT = 18;
    if(password == confirmPassword){
        if(!validPassword.test(password) && password.length <= MAX_LENGHT)
            throw new Error(`doesn't match the regex`);
    }else
        throw new Error(`Not equals `);
}