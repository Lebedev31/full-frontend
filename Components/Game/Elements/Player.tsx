import style from '@/style/Game.module.scss';
import { Card } from '@/types/types';
import DraggableCard from './DraggableCard';

type PlayerProps = {
    data: Card[];
  };

function Player({ data }:PlayerProps){
    return <div className={style.game_player}>
               <div className={style.player_card}>
                   {data.map((item, index)=>{
                       return <DraggableCard key={index} imgPath={item.imgPath}/>;
                   })}
               </div>
         </div>
}

export default Player;