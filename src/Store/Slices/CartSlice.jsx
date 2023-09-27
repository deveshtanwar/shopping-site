import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalCount: 0
    },
    reducers: {
        addItem(state, action) {
            var find = -1;
            for(let i = 0; i<state.items.length; i++){
                if(state.items[i].id == action.payload.id && state.items[i].color == action.payload.color && state.items[i].storage == action.payload.storage){
                    find = i;
                }
            }
            if(find >= 0){
                if(state.items[find].color == action.payload.color && state.items[find].storage == action.payload.storage){
                    state.items[find].quantity += 1;
                }
                else{
                    state.items.push(action.payload);
                }
            }
            else{
                state.items.push(action.payload);
            }
            let length = 0;
            state.items.map((val)=>{
                length += val.quantity;
            })
            state.totalCount = length;
        },
        removeItem(state, action){
            var find = -1;
            for(let i = 0; i<state.items.length; i++){
                if(state.items[i].id == action.payload.id && state.items[i].color == action.payload.color && state.items[i].storage == action.payload.storage){
                    find = i;
                }
            }
            if(state.items[find].quantity > 1){
                if(find >= 0){
                    if(state.items[find].color == action.payload.color && state.items[find].storage == action.payload.storage){
                        state.items[find].quantity -= 1;
                        state.totalCount-=1
                    }
                    else{
                        state.items = state.items.filter(item => item.id !== action.payload.id);
                        state.totalCount-=1
                    }
                }
            }
            else{
                state.items = state.items.filter(item => item.uid !== action.payload.uid);
                state.totalCount-=1
            }
            
        },
        clearCart(state) {
            state.items = [];
            state.totalCount = state.items.length;
        }
    }
})

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;