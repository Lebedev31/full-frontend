import style from '@/style/Game.module.scss';
import { Card } from '@/types/types';
import { useDrop } from 'react-dnd';
import Image from 'next/image';

function Field({field}: {field: Card[]}){

    return <div className={style.game_field}>
              <div className={style.player_card}>
                    {field.map((item, index)=>{
                        return <div key={index} className={style.player_item}>
                              <Image src={item.imgPath} alt="img" width={75} height={130}/>
                        </div>
                    })}
              </div>
         </div>
}

export default Field;