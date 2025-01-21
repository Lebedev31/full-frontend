import { RegisterOptions } from "react-hook-form";
import { FormRegister } from "@/types/types";

export const validationLogin: RegisterOptions<FormRegister, 'name'> = {
    required: "Введите логин",
    minLength: {
        value: 3,
        message: "Логин должен быть длиннее 3 символов",
    },
    maxLength: {
        value: 40,
        message: "Логин должен быть короче 15 символов",
    },

    pattern: {
        value: /[A-Za-z]+/,
        message: "Только латинские буквы",
      },
};


export const validationEmail: RegisterOptions<FormRegister, "email"> = {
    required: "Поле обязательно для заполнения",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Неверный формат email",
    },
  };


  export const validationPassword: RegisterOptions<FormRegister, "password"> = {
    required: "Поле обязательно для заполнения",
  
    maxLength: {
      value: 40,
      message: "Пароль должен быть не более 40 символов",
    },
    validate: {
      hasLowerCase: (value) =>
        /[a-z]/.test(value) ||
        "Пароль должен содержать хотя бы одну строчную букву",
      hasUpperCase: (value) =>
        /[A-Z]/.test(value) ||
        "Пароль должен содержать хотя бы одну заглавную букву",
      hasNumber: (value) =>
        /\d/.test(value) || "Пароль должен содержать хотя бы одну цифру",
      hasSpecialChar: (value) =>
        /[@$!%*?&]/.test(value) ||
        "Пароль должен содержать хотя бы один специальный символ",
      minLength: (value) =>
        value.length >= 8 || "Пароль должен быть не менее 8 символов",
    },
  };