'use client'
import Interface from "./Elements/Interface";
import Enemy from './Elements/Enemy';
import Field from './Elements/Field';
import Player from './Elements/Player';
import useSocketConnect from "@/Api/socket/socketHook";
import style from '@/style/Game.module.scss';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Game(){
    const {connected, data} = useSocketConnect();

    console.log(connected);

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