import React from "react"




const Task = (props) => {
    let startHours = Math.floor(props.startTime / 60)
    let startMinutes = (props.startTime % 60).toString().length > 1 ? props.startTime % 60 : '0' + (props.startTime % 60)
    let endHours = Math.floor((props.startTime + props.duration) / 60)
    let endMinutes = ((props.startTime + props.duration)  % 60).toString().length > 1 ? (props.startTime + props.duration)  % 60 : '0' + ((props.startTime + props.duration)  % 60)
    if (endHours / 24 > 1) {
        endHours -= 24 * Math.floor(endHours / 24)
    }
    if (startHours / 24 > 1) {
        startHours -= 24 * Math.floor(startHours / 24)
    }
    if (startHours.toString().length < 2) {
        startHours = "0" + startHours
    }
    if (endHours.toString().length < 2) {
        endHours = "0" + endHours
    }
    
    return (   
        <tr className="table-row">
            <td className="table-row_time">{`${startHours}:${startMinutes} - ${endHours}:${endMinutes}`}</td>
            <td className="table-row__text">{props.taskText}</td> 
            <td>
            {props.form == true ? 
                <div>
                    
                    
                    
                    <select 
                    className="select select__dark"
                    name="duration" 
                    defaultValue={props.duration} 
                    onChange={(e) => {
                        e.persist()
                        props.changeDuration(props.taskId, e)
                    }} >
                        <option value={5}>5min</option>
                        <option value={10}>10min</option>
                        <option value={15}>15min</option>
                        <option value={20}>20min</option>
                        <option value={30}>30min</option>
                        <option value={40}>40min</option>
                        <option value={50}>50min</option>
                        <option value={55}>55min</option>
                        <option value={60}>1hr</option>
                        <option value={60*1.5}>90min</option>
                        <option value={60*2}>2hrs</option>
                        <option value={60*3}>3hrs</option>
                        <option value={60*4}>4hrs</option>
                        <option value={60*5}>5hrs</option>
                        <option value={60*6}>6hrs</option>
                        <option value={60*7}>7hrs</option>
                        <option value={60*8}>8hrs</option>
                    </select>  
                    <button
                    className="table-row_button button button--link"
                    onClick={() => {
                        props.removeTask(props.taskId)
                    }} 
                    >
                        Remove
                    </button>
                    
            </div>
            :
            <span>{Math.floor(props.duration/60)} hrs </span>
        }
        </td>
            
        </tr> 
    )
}

export default Task



