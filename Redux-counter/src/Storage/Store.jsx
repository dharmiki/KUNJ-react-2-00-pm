import {configureStore} from '@reduxjs/toolkit'
import  slic  from '../Features/Slice'
export const stor=configureStore({
    reducer :{
        slic : slic
    }
})