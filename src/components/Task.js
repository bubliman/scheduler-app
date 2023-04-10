import React from "react"




const Task = (props) => {
    const endTime = new Date 
    const startTime = props.startTime
    if (startTime != undefined) {
        endTime.setTime(startTime)
        endTime.setHours(endTime.getHours() + Math.floor(props.duration / 60))
        endTime.setMinutes(endTime.getMinutes() + props.duration % 60)
    }
    const currentTime = new Date
    let highlight = false
    if (currentTime.getTime() < endTime.getTime() && currentTime.getTime() > startTime.getTime()) {
        highlight = true
    }
    
    
    return (   
        <tr className={ highlight == true ? "table-row  highlight" : "table-row"}>
            <td className="table-row_time">{`${startTime && (startTime.toString()).substring(15, 21)} - ${endTime && (endTime.toString()).substring(15, 21)}`}</td>
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



