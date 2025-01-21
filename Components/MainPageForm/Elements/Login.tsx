"use client";
import style from '@/style/Registration.module.scss';
import useCustomForm from '@/Hooks/FormHook/FormHook';
import { TextField } from '@mui/material';
import SocialRegister from './SocialRegister';
import { Button } from '@mui/material';
import { useLoginMutation } from '@/Api/apiSlice/authSlice';
import { IUser } from '@/types/types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

function Login() {
    const router = useRouter();
    const {register, errors, validationPassword, validationLogin, handleSubmit, reset} = useCustomForm();
    const [login] = useLoginMutation();
    const onSubmit = async (data: Omit<IUser, 'email'>) =>{
        try {
         const result =  await login(data).unwrap();   
         if(result){
            router.push('/menu');
        }
        } catch (error) {
             console.log(error);
             toast.error('Неверные данные');
        } finally {
           reset();
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
                       label="Пароль" 
                       variant="outlined" 
                       className={style.registration_input}
                       {...register('password', validationPassword)}/>
            <div className={style.registrarion_error}>
                {errors.password && <span>{errors.password.message}</span>}
            </div> 

            
            <h3>Вход с помощью социальных сетей</h3>
          <SocialRegister/>
       <Button  type="submit" sx={{ color: 'black'}}>Вход</Button>
        </form>
    )
}

export default Login;