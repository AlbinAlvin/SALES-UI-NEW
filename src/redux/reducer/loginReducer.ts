import * as lActionType from "../actiontype/loginActionType";
import { ILogin} from "../../state/loginState";

const initialState: ILogin = {
    response: '',
    isLoading: false,
}

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case lActionType.VALIDATE_USER:
            return {
                ...state,
                response: '',
                isLoading: false,
            };
            case lActionType.VALIDATE_USER_SUCCESS:
            return {
                ...state,
                response: action?.data,
                isLoading: true,
            };
            case lActionType.VALIDATE_USER_FAILURE:
            return {
                ...state,
                response: '',
                isLoading: false,
            };
        default:
            return { ...state }
    }
}

export default loginReducer;