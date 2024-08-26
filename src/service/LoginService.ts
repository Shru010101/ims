import axios from 'axios';

import { Iuser } from "../module/Iuser"

export class LoginService {

    private static serviceUrl ='https://developerschool-backend.onrender.com/api/v1/urole/'

    public static userLogin = (body: Iuser): Promise<{ data: any }> => {

        const data = `${this.serviceUrl}userlogin`;

        return axios.post(data, body);
    };
}