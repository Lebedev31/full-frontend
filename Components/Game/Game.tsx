'use client'
import Interface from "./Elements/Interface";
import Enemy from './Elements/Enemy';
import Field from './Elements/Field';
import Player from './Elements/Player';
import useSocketConnect from "@/Api/socket/socketHook";
import style from '@/style/Game.module.scss';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { setSequence, move } from "@/Api/slice/gameSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Api/store";
import { Card } from "@/types/types";
import { CardDynamicTypes } from "@/Api/slice/gameSlice";

function Game(){
    const {connected, data} = useSocketConnect();
    const dispatch: AppDispatch = useDispatch();

    const transformationTypeCard = (card: Card[]): CardDynamicTypes[] => {
      const transform = card.map((item)=> {
          return {
              power: item.presentStrength,
              name: item.name,
              suit: item.suit,
              dynamicType: 'A',
              _id: item._id
          }
      });
  
      return transform;
  }
console.log(1);
   const renderStatus = () => {
        if(connected === 'connect'){
           return <div>Loading...</div>
        }

        if(connected === 'succsessConnect'){
           return <div>Подключены к серверу</div>
        }

        if(connected === 'disconnect'){
           return <div> Ошибка...</div>
        }

        if(connected === 'gameActive'){

          if (data) {
           
            if(data.sequence){
              dispatch(setSequence({sequence: data.sequence, idGame: data.idGame}));
            }

            const field = transformationTypeCard(data.field);
            const player = transformationTypeCard(data.player);
            dispatch(move({field, player}));

            return (
              <DndProvider backend={HTML5Backend}>
                <Enemy enemy={data.enemy}/>
                <Field field={data.field} />
                <Interface />
                <Player data={data.player} />
              </DndProvider>
               
            );
        } 
    }
  } 
    
    return <main className={style.game}>
             {renderStatus()}
         </main>
}

export default Game;