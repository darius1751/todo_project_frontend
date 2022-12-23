export const isValidName = (name:string) => {
    const validName = /^\w{3,}/;
    if(!validName.test(name))
        throw new Error(`Not is valid name`);
}