export interface config{
    data?:any;
    header:object;
    apiUrl: string;
}

export class configHeaders{
    static apiConfig = () => {setApiUrl}
}


const setApiUrl = () => {
return  'https://localhost:8080/';
}

const defaultHeaders ={
    'Content-Type':'application/json;charset=UTF-8',
    Accept:'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers':'Origin,X-Requested-With,Content-Type,Accept,Authorization',
}

export class Headers{
    static defaultHeaders =() =>{
        return{
            ...defaultHeaders,
        }
    }
}