import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    character: [],
    nombre:[],
    usertype:``,
    };
    
 
    export const DigimonSlice = createSlice({
        name: 'digi',
        initialState,
        reducers: {
         setapicharacters: (satet,action)=>{
          satet.apicharacters === action.payload},

         setcustumcharacters: (satet,action)=>{
         satet.custumcharacters === action.payload},

        //  setcustumcharacters: (satet,action)=>{
        //  satet.custumcharacters === action.payload},

        //  setcustumcharacters: (satet,action)=>{
        //  satet.custumcharacters === action.payload},

          
          }
        });

        export default DigimonSlice.reducer;