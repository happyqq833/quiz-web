export function generationToken(){
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 20;
    let token = '';


    for (let i = 0; i < length; i++){
        token += character.charAt(Math.floor(Math.random()*character.length));
    }

    return token;
}