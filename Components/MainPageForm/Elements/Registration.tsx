"use client";
import style from '@/style/Registration.module.scss';
import { TextField } from '@mui/material';
import useCustomForm from '@/Hooks/FormHook/FormHook';
import SocialRegister from './SocialRegister';
import { Button } from '@mui/material';
import { useCreateUserMutation } from '@/Api/apiSlice/userSlice';
import { IUser } from '@/types/types';
import { toast } from 'react-toastify';

function Registration(){

    const {register, password, errors, 
        validationEmail, validationPassword, validationLogin, handleSubmit, reset} = useCustomForm();
    const [createUser] = useCreateUserMutation();


    const onSubmit = async (data: IUser) => {
         try {
        const result = await createUser(data).unwrap();
        console.log(result);
        if(result){
            toast.success('Регистрация успешно проведена, войдите в свой аккаунт');
            reset();
        }
         } catch (error) {
             console.log(error);
             toast.error('Произошла ошибка регистрации');
         }
    }
    return (
        <form className={style.registration_form} onSubmit={handleSubmit(onSubmit)}>
        <TextField id="outlined-basic" 
                       label="Логин" 
                       variant="outlined" 
                       className={style.registration_input}
                       {...register("name", validationLogin)}/>
            <div className={style.registrarion_error}>
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <TextField id="outlined-basic" 
                       label="Email" 
                       variant="outlined" 
                       className={style.registration_input}
                       {...register("email", validationEmail)}/>
            <div className={style.registrarion_error}>
                {errors.email && <span>{errors.email.message}</span>}
            </div>      
            <TextField id="outlined-basic" 
                       label="Пароль" 
                       variant="outlined" 
                       className={style.registration_input}
                       {...register('password', validationPassword)}/>
            <div className={style.registrarion_error}>
                {errors.password && <span>{errors.password.message}</span>}
            </div>   
            <TextField id="outlined-basic" 
                       label="Подтвердить пароль" 
                       variant="outlined" 
                       className={style.registration_input} 
                       {...register('confirmPassword', {
                        required: 'Подтвердите пароль',
                        validate: {
                            confirm: (value)=>{
                              return value === password || 'Пароли не совпадают'
                            }
                        }
                       })}/>
            <div className={style.registrarion_error}>
                       {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
            </div> 

            <h3>Регистрация с помощью социальных сетей</h3>
          <SocialRegister/>
       <Button  type="submit" sx={{ color: 'black'}}>Регистрация</Button>
        </form>
    )
}

export default Registration;