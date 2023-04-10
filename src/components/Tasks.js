import React from "react"
import Task from "./Task"




const Tasks = (props) => {
    
    let sleepStart = props.wakeTime - props.sleep * 60
    let sleep = props.sleep * 60
    if (sleepStart - sleep < 0) { 
        sleepStart = sleepStart + (24 * 60)
    }
    if (sleep == undefined) {
        sleep = 8 * 60
    }
    if (sleepStart == undefined) {
        sleepStart = 7 * 60
    }
    return (
    
        <div> 
        {props.tasks.length === 0 && <p className="add-notice">Please add a task to get started!</p>}
        <table className="table">
            <tbody>
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
                        duration={sleep}
                        
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



