import {createSelector} from 'reselect'

const selectUser = state => state.user;

export const selectCurrentUser = createSelector( [selectUser],
    //the below function gets the return of the above input selector 
    user => user.currentUser //here `user` is the `user reducer` that we sliced from the state in above input selector
    ) 




    // we can pass the above input selectors in array or as arguments in  order in which we are passing them as parametres for below function 