import React from "react"
import Task from "./Task"




const Tasks = (props) => {
    
    let sleepStart = new Date
    sleepStart.setHours(Math.floor((props.wakeTime - props.sleep * 60) / 60) < 0 ? (Math.floor((props.wakeTime - props.sleep * 60) / 60)) + 24 : Math.floor((props.wakeTime - props.sleep * 60) / 60))
    sleepStart.setMinutes((props.wakeTime - props.sleep * 60) % 60)
    sleepStart.setSeconds(0)
    sleepStart.setMilliseconds(0)

    return (
    
        <div> 
        {props.tasks.length === 0 && <p className="add-notice">Please add a task to get started!</p>}
        <table className="table">
            <tbody>
            {console.log(props.tasks)}
            {
                
                props.tasks.map((task) => (
                    <Task 
                        key={task.id} 
                        taskId={task.id}
                        taskText={task.text} 
                        duration={task.duration}
                        startTime={task.startTime}
                        
                        form={true}
                        removeTask={props.removeTask}
                        changeDuration={props.changeDuration}
                    />
                ))
            }
            <Task 
                        key={Date.now()} 
                        taskId={Date.now()}
                        taskText={'Sleep'} 
                        duration={props.sleep * 60}
                        
                        startTime={sleepStart}
                        
                        form={false}
                        removeTask={props.removeTask}
                        changeDuration={props.changeDuration}
                    />
            </tbody>
        </table>
    </div>
)
}
export default Tasks



