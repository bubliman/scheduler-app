import React from "react"
import List from "./List"
import Settings from "./Settings"
import Header from "./Header"


export default class ScheduleApp extends React.Component {
    state = {
        
    }
    
    
    render() {
        return (
            <div> 
                <Header />
                <List wakeTime={this.state.wakeTime} sleep={this.state.sleep} />
                <Settings handleSettings={this.handleSettings} wakeTime={this.state.wakeTime} sleep={this.state.sleep} />
            </div>
        )
    }
}

