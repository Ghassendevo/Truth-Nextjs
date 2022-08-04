export const isChat = (state = false, action) => {
    if (action.type == 'ISCHAT') return !state
    else return state
}