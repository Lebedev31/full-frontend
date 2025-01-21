import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CardDynamicTypes = { // тип возникающий в ходе игрового хода, определяющий какие карты можно поставить на стол
    type: string;  
    power: number;
    name: string;
    suit: string;
    dynamicType: string; // с каждым ходом противника тип карт возможных к использованию меняется
}

type InitialState = {
    sequence: boolean;  // чей ход игрока или противника. Если true, то игрок, если false, то противник
    possibleMaps: CardDynamicTypes[]; // массив возможных карт, которые можно использовать при атаке или обороне
    field: CardDynamicTypes[] // за счет этого свойства определяем какой тип карт можно использовать на столе, путем сравнения
    dynamicType: string // конкретный динамический тип, который должен совпадать с множеством возможных карт в руке
}

const initialState: InitialState = {
    sequence: false,
    possibleMaps: [],
    field: [],
    dynamicType: ''
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setSequence: (state, action: PayloadAction<boolean> )=>{
           state.sequence = action.payload;
        }
    }
})

export default gameSlice.reducer;