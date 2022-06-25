import * as lActionType  from "../actiontype/loginActionType"

export const validateUser=(payload: any)=>({
    type: lActionType.VALIDATE_USER,
    payload,
});

export default{
    validateUser,
};