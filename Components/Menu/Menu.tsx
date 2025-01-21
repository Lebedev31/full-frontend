import style from '@/style/Menu.module.scss'
import { Button } from '@mui/material';
import Link from 'next/link';
function Menu(){
    return (
        <main className={style.menu}>
              <h1>Меню</h1>
              <Button className={style.button_center}>Личный кабинет</Button>
              <Link href="/game"><Button className={style.button_center}>Играть</Button></Link>  
        </main>
    )
}

export default Menu;