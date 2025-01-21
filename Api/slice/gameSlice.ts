import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CardDynamicTypes = { // тип возникающий в ходе игрового хода, определяющий какие карты можно поставить на стол
    power: number;
    name: string;
    suit: string;
    dynamicType: string; // с каждым ходом противника тип карт возможных к использованию меняется
    _id: string;
}

type InitialState = {
    sequence: boolean;  // чей ход игрока или противника. Если true, то игрок, если false, то противник
    possibleMaps: CardDynamicTypes[]; // массив возможных карт, которые можно использовать при атаке или обороне
    field: CardDynamicTypes[] // за счет этого свойства определяем какой тип карт можно использовать на столе, путем сравнения
    status: 'start' | 'game' | 'finish';
    dynamicType: string;
    idGame: string;
}

const initialState: InitialState = {
    sequence: false,
    possibleMaps: [],
    field: [],
    status: 'start',
    dynamicType: 'A',
    idGame: ''
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setSequence: (state, action: PayloadAction<{sequence: boolean, idGame: string}>) => {
            if(state.status === 'start' ){
                state.sequence = action.payload.sequence;
                state.idGame = action.payload.idGame;
                state.status = 'game';
                console.log(state.sequence);
            }
        },

        move: (state, action: PayloadAction<{field: CardDynamicTypes[], player: CardDynamicTypes[]}>) => {
            if(state.sequence){

                if(action.payload.field.length === 0){
                      state.possibleMaps = action.payload.player;
            } 
        }
        },

    }

        
});

export const {setSequence, move} = gameSlice.actions;

export default gameSlice.reducer;