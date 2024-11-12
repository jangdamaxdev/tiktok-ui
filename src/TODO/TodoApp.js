import reducer, { initData } from "./reducer_action";
import { useReducer, useRef } from "react";
export default function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initData);
    const inputRef = useRef()
    return (
        <div>
            <input type="text" 
            ref = {inputRef}
            />
            <button 
            onClick={e => 
                dispatch({command: 'ADD', datum: {title: inputRef.current.value}})}
            >Add</button>
            <ul>
                {state.map((job, index) =>  job.jobName && 
                <li 
                key={index}
                style={job.isCompleted ? {color: 'green'} : {}}
                >{job.jobName}
                
                <span onClick={e => dispatch({command: 'DONE', datum: {index}})}>*Done*</span>
                
                </li>
            )}
            </ul>

        </div>
    );
}