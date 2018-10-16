import  Constants from './constants'
import { goal, addDay, errors, allSkiDays, fetching, suggestions } from './store/reducers'
import appReducer from './store/reducers'
import initalState from './initialState'

let state = initalState

console.log(`

        First State
        ============
        ${state.goal}
        ${JSON.stringify(state.allSkiDays)}
        ${JSON.stringify(state.errors)}
        ${JSON.stringify(state.resortNames.fetching)}
        ${JSON.stringify(state.resortNames.suggestions)}

        =============
`)


state = appReducer(state, {
    type: Constants.SET_GOAL,
    payload: 2
})

state = appReducer(state, {
    type: Constants.ADD_DAY,
    payload: {
        "resort": "New Valley",
        "date": "1993-12-08",
        "powder": true,
        "backcountry": true
    }
})

state = appReducer(state, {
    type: Constants.CHANGE_SUGGESTIONS,
    payload: ["Mt Tallic", "Mt Judy", "Mt Louie"]
})

console.log(`
        Next State
        ===========
        ${state.goal}
        ${JSON.stringify(state.allSkiDays)}
        ${JSON.stringify(state.errors)}
        ${JSON.stringify(state.resortNames.fetching)}
        ${JSON.stringify(state.resortNames.suggestions)}

        =============
`)































/*

const  state = [{
    "resort": "Kirkwood",
    "date": "15-01-1993",
    "powder": true,
    "backcountry": false
}, {
    "resort": "Louie",
    "date": "14-01-1993",
    "powder": false,
    "backcountry": false
}]

const  action = {
    type: Constants.REMOVE_DAY,
    payload: "14-01-1993"
}

const nextState = allSkiDays(state, action)

console.log(`
    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`)

//JSON.stringify turns the object into a string.*/
