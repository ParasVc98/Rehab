import { deviceStorage } from './storage';


export async function getPoisons() {
    const url = "http://localhost:3000/users";
    var token = await deviceStorage.loadJWT();
    var headers = new Headers();
    headers.append("Authorization", "Token token=" + token);
    let result = await fetch(url, { headers: headers }).then(response => response.json());
    return result.user.poisons;
}