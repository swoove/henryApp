import createDataContext from './createDataContext';

const authReducer = (state,action) =>{
    switch(action.type){
        default:
            return state;
    }
};

const signup = (dispatch) =>
{
    return ({email, password}) =>
    {
        const response = {email,password};
        console.log(response.data);
    };
}

const signin = (dispatch) =>
{
    return ({email, password}) =>
    {
        
    };
};

const signout = (dispatch) =>
{
    return () =>
    {
        
    };
};

export const {Provider,Context} = createDataContext(
    authReducer,
    {signin,signout,signup},
    {isSignedIn: false}
);