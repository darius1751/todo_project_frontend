export const isEqualsPassword = (password:string, confirmPassword:string) => {
    if(password === confirmPassword){
       isValidPassword(password);
    }else
        throw new Error(`Not equals`);
}
export const isValidPassword = (password:string) => {
    const validPassword = /^\w{5,}\d{1,}\W+/;
    const MAX_LENGHT = 18;
    console.log(password.length, password)
    if(!validPassword.test(password) || password.length >= MAX_LENGHT)
        throw new Error(`Password doesn't match the regex (5 or more characters, 1 or more numbers, 1 or more Simbols) and max Lenght 18 characters`);
}
