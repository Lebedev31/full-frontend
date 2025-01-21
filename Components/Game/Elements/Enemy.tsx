import style from '@/style/Game.module.scss'
import Image from 'next/image';



function Enemy({enemy}: {enemy: number}){
    return <div className={style.game_enemy}>
        <div className={style.player_card}>
            {Array.from({length: enemy}, (_, index) => 
                <div key={index} className={style.player_item}>
                 <Image src="/img/рубашка2.webp" alt="card" width={75} height={130}/>
                </div>)
            }
        </div>
     
    </div>
}

export default Enemy;