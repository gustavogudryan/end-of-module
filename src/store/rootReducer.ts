import { combineReducers } from '@reduxjs/toolkit';
import usuarios from './usuariosSlice'
import recados from './recadosSlice'


const reducers={
    usuarios,
    recados
}

    const combineReducer=combineReducers({
        ...reducers
    })

    export type CRUDState=ReturnType<typeof combineReducer>
    export default combineReducer

