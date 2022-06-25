import {combineReducers} from 'redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import loginReducer from './loginReducer';
import { type } from 'os';


const rootReducer = combineReducers({
login: loginReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default rootReducer;
