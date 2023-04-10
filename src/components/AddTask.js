import React from "react"

export default class AddTask extends React.Component {
    state = {
        error: undefined
    }
    checkTask = (e) => {
        e.preventDefault() 
        const task = e.target.elements.task.value.trim()
        const duration = parseInt(e.target.elements.duration.value.trim(), 10)
        let error = undefined
        console.log(duration)
        error = this.props.addTask(task, duration)
        this.setState(() => ({error: error}))
        if (!error) {
            e.target.elements.task.value = ''
        }

    }
    render() {
        return (
            <div>
                {this.state.error == 'The task is interfering with your sleep' && <p className="error">{this.state.error}</p>}
                <form className='add-task' onSubmit={this.checkTask}>
                    <div className="inputs">
                    <input className={`add-task__input ${this.state.error == 'Enter valid value to add item' && ' shake' }`} placeholder={this.state.error ? this.state.error : 'Add Task'} type="text" name="task" autoFocus></input>
                    <select className={`add-task__select select select__dark ${this.state.error == 'The task is interfering with your sleep' && ' shake' }`} name="duration">
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
                    </div>
                    <button className="button" type="submit">Add Task</button>
                </form>
            </div>
        )
    }
}