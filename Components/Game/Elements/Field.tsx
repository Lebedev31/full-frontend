import style from '@/style/Game.module.scss';
import { Card } from '@/types/types';
import { useDrop } from 'react-dnd';
import Image from 'next/image';
import {useRef} from 'react';
import { socketSessionField } from '@/Api/socket/getSocketSession';

type DropFieldSession = {
      idCard: string;
      idGame: string;
}

function Field({field}: {field: Card[]}){
   const dropRef = useRef<HTMLDivElement>(null);
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [{ isOver, canDrop }, connectDropTarget] = useDrop({
      accept: 'A',
      drop: (item: DropFieldSession) => {
              console.log(item.idCard);
              socketSessionField(item.idCard, item.idGame);
          },
          collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
          }),
   }, []);
     connectDropTarget(dropRef)
    return <div className={style.game_field}>
              <div className={style.player_card} ref={dropRef}>
                    {field.map((item, index)=>{
                        return <div key={index} className={style.player_item}>
                              <Image src={item.imgPath} alt="img" width={75} height={130}/>
                        </div>
                    })}
              </div>
         </div>
}

export default Field;