"use client";
import style from '@/style/Registration.module.scss';
import Image from 'next/image';

function SocialRegister() {
    const handleLogin = () => {
        window.location.href = 'http://localhost:8080/auth/google';
    }
    return (
        <div className={style.registration_social}>
            <div className={style.registration_social__img} onClick={handleLogin}>
                 <Image src="/google-178-svgrepo-com.svg" 
                        alt="google" 
                        width={40}
                        height={40}/>
            </div>
            <div className={style.registration_social__img}>
                 <Image src="/yandex-svgrepo-com.svg" 
                        alt="yandex" 
                        width={40}
                        height={40}/>
            </div>
        </div>
)

}

export default SocialRegister;
