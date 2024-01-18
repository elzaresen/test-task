"use server";

export const login = ({username, password}: {username: string, password: string}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'admin' && password === 'admin') {
                resolve('Login success');
            } else {
                reject('Login fail');
            }
        }, 1000);
    });
}