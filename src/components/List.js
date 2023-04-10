import React from "react"
import Tasks from "./Tasks"
import AddTask from "./AddTask"
import RemoveAll from "./RemoveAll"
import Title from "./Title"
import Settings from "./Settings"
import Header from "./Header"

let date = new Date
date.setHours(20)
date.setMinutes(32)
date.setSeconds(0)
date.setMilliseconds(0)

console.log(date.getTime())

export default class List extends React.Component {
    state = {
        tasks: [],
        wakeTime: undefined,
        sleep: undefined,
    }
    
    componentDidMount() {
        let tasks = localStorage.getItem('tasks')
        let settings = localStorage.getItem('settings')
        if (settings) {
            settings = JSON.parse(settings)
            this.handleSettings(settings.wakeTime, settings.sleep)
        }
        if (tasks) { 
            tasks = JSON.parse(tasks)
            this.setState(() => ({tasks: tasks})) 
            this.setTaskTime()
        }
      
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.tasks.length !== this.state.tasks.length) {
            const json = JSON.stringify(this.state.tasks)
            localStorage.setItem('tasks', json)
            this.setTaskTime()
        } 
        if (prevState.wakeTime !== this.state.wakeTime || prevState.sleep !== this.state.sleep) {
            this.setTaskTime()
        }
        console.log(prevState.tasks)
        
        for (let i = 0; i < this.state.tasks.length; i++) {
            if (prevState.tasks[i]) {
                this.state.tasks[i].duration != prevState.tasks[i].duration ? this.setTaskTime() : null
            }
        }
        const json = JSON.stringify(this.state)
        localStorage.setItem('settings', json)
    }
    handleSettings = (wakeTime, sleep) => {
        this.setState(() => ({wakeTime: wakeTime, sleep: sleep}))
    }
  
    addTask = (taskText, duration) => {
        if (!taskText) {
            return 'Enter valid value to add item'
        }
        let totalTime = this.totalTaskTime() + duration + this.state.wakeTime * 60
        let maxTime = (this.state.wakeTime * 60 - this.state.sleep * 60) + 24 * 60
        if (totalTime >= maxTime) {
            return 'The task is interfering with your sleep'
        }
        this.setState((prevState) => ({tasks: prevState.tasks.concat({id: Date.now(), text: taskText, duration: duration, startTime: undefined})}))
        
    }
    removeTask = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter(task => task.id != id)
        }))
    }
    removeAllTasks = () => {
        this.setState(() => ({ tasks: [] }))
    }
    changeDuration = (id, e) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(
                task => task.id === id ? {id: task.id, text: task.text, duration: parseInt(e.target.value), startTime: task.startTime }: task
            )
        }))
    }
    totalTaskTime = () => {
        let totalTime = 0
        for (let i = 0; i < this.state.tasks.length; i++) {
            console.log("count "+ i + " | total duration " + totalTime)
            totalTime += this.state.tasks[i]['duration']
        }
        return totalTime
    }
    setTaskTime = () => {
        
        for (let i = 0; i < this.state.tasks.length; i++) {
            let startTime = this.state.wakeTime
            for (let k = 0; k < this.state.tasks.indexOf(this.state.tasks[i]); k++) {
                console.log('setting ' + this.state.tasks[k]['text'])
                startTime += this.state.tasks[k]['duration']
            }
            this.setState(prevState => ({
                tasks: prevState.tasks.map(
                    task => task.id === this.state.tasks[i].id ? {id: task.id, text: task.text, duration: task.duration, startTime: startTime }: task
                )
            }))
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="widget">
                        <div className="widget-header">
                            <Title />
                            <RemoveAll removeAllTasks={this.removeAllTasks}/>
                        </div>
                        <Tasks tasks={this.state.tasks} removeTask={this.removeTask} wakeTime={this.state.wakeTime} sleep={this.state.sleep} changeDuration={this.changeDuration} />
                        <AddTask addTask={this.addTask} tasks={this.state.tasks} />
                    </div>
                </div>
                <Settings handleSettings={this.handleSettings} wakeTime={this.state.wakeTime} sleep={this.state.sleep} />
            </div>
        )
    } 
}
