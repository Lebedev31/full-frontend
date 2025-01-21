export interface IUser { // юзер
    name: string;
    email: string;
    password: string;
}


export interface FormRegister extends IUser  { // форма регистрации
    confirmPassword: string;
}


//export type ErrorRtkQuery = {

//}

export type ResponseSuccessRegister = { // успешная регистрация
    message: string;
}

export type Card = {
    // тип карты
    suit: string;
    imgPath: string;
    name: string;
    defaultPower: number;
    trump: string;
    presentStrength: number;
  };
  

export type ClientKardOnlineSession = {
    idGame: string;
    trumpName: string;
    player: Card[];
    enemy: number;
    count: number;
    field: Card[];
  };