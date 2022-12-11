 import {configureStore, createSlice} from '@reduxjs/toolkit';


 //slice will create  action types and reducers that correspond to state.
 const favoritesSlice = createSlice({
                        name:'favorites',
                        initialState:[],
                        reducers:{
                            addFavoriteSong(state,action)
                            {
                               //here state is not global state it is state that is managed by that reducer
                                state.push(action.payload);
                                return state;
                            }                           
                        }
                    });




const playListSlice = createSlice({
                        name:'playLists',
                        initialState:[],
                        reducers:{
                            addSong(state,action)
                            {
                                state.push(action.payload);
                                return state;
                            }                           
                        }
                    });



const store = configureStore({
        reducer:{ favorites:favoritesSlice.reducer , 
                  playLists:playListSlice.reducer,               
                }
});

                console.log(store.getState());

store.dispatch({type:"favorites/addFavoriteSong",
                payload:"john cena"});

store.dispatch(playListSlice.actions.addSong('My heart will go on'))

                console.log(store.getState());

