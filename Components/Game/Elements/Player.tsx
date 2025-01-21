import style from '@/style/Game.module.scss';
import { Card } from '@/types/types';
import DraggableCard from './DraggableCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/Api/store';

type PlayerProps = {
    data: Card[];
  };

function Player({ data }:PlayerProps){
    const activeType = useSelector((state: RootState) => state.game.possibleMaps);
    const idGame = useSelector((state: RootState) => state.game.idGame);
    return <div className={style.game_player}>
               <div className={style.player_card}>
                   {data.map((item, index)=>{
                       if(activeType.length > 0){
                        const dragType = activeType[index]._id === item._id ? activeType[index].dynamicType: 'defaltType';
                            return <DraggableCard key={index} 
                                                  dragType={dragType} 
                                                  imgPath={item.imgPath}
                                                  idGame={idGame}
                                                  idCard={item._id}/>;
                       } else {
                            return <DraggableCard key={index} 
                                                  dragType={'defaltType'} 
                                                  imgPath={item.imgPath}
                                                  idGame={idGame}
                                                  idCard={item._id}/>;
                       }
                   })}
               </div>
         </div>
}

export default Player;