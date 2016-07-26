import {fromJS} from 'immutable'

export const UPDATE_BUTTON = 'UPDATE_BUTTON'
export const updateButton = () =>({type: 'UPDATE_BUTTON'})

function home(state = fromJS({buttonClick: 0}), action = null) {
    switch (action.type) {
        case UPDATE_BUTTON:
            return state.set('buttonClick', state.get('buttonClick', 0) + 1)
        default:
            return state
    }
}

export default home