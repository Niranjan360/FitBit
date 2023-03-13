const initalState = { user : null };

const rootReducer = (state=initalState  , action)=>
{
    switch(action.type)
    {
        case "ADD_USER" : return {user : action.payload}
        case "REMOVE_USER" : return {user : action.payload}
        case "EDIT_USER" : return {user : action.payload}
        default : return state;
    }
}

export default rootReducer;