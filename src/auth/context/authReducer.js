import { types } from "../types/types";


export const authReducer = ( state = {}, action ) => {
// no llamar localstorage ni otras cosas, en el reducer debe jugar con los parametros
    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };
        case types.logout:

            return {
                logged: false,
            };

        default:
            return state;
    }
}
