import C from './constants';
import fetch from 'isomorphic-fetch';

export const addDay = (resort, date, powder=false, backcountry=false) => {
    return {
        type: C.ADD_DAY,
        payload: {resort, date, powder, backcountry}
    }
}

export const removeDay = (date) => {
    return {
        type: C.REMOVE_DAY,
        payload: date
    }
}

export const setGoal = (goal) => ({type: C.SET_GOAL, payload: goal})

export const addError = (error) => ({type: C.ADD_ERROR, payload: error})

export const clearError = (error) => ({type: C.CLEAR_ERROR, payload: error})

export const changeSuggestions = (suggestions) => ({type: C.CHANGE_SUGGESTIONS, payload: suggestions})

export const clearSuggestions = () => ({type: C.CLEAR_SUGGESTIONS})

export const suggestResortNames = value => (dispatch) => {
    dispatch({
        type: C.FETCH_RESORT_NAMES
    })

    fetch('http://localhost:3333/resorts/' + value)
        .then(response=>{
            return response.json()
        })
        .then(data => {
            dispatch({
                type: C.CHANGE_SUGGESTIONS,
                payload: data
            })
        })
        .catch(err => {
            dispatch(
                addError(err.message)
            )
            dispatch({
                type: C.CANCEL_FETCHING
            })
        })
}