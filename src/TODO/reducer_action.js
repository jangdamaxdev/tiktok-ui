export const initData = [{
    jobName: "",
    isCompleted: true
}]
 const actions = {
    ADD(state, {title}) {
        return title.trim() ? 
        [
            ...state,
            {
                jobName: title,
                isCompleted: false
            }
        ] : state
    },
    DONE(state, {index}) {
        if (state[index]) {
            state[index].isCompleted = !state[index].isCompleted            
        }         
        return [...state]
    }

}
export default function reducer(state = initData, { command, datum }) {
    return state && actions[command] && actions[command](state, datum)
}