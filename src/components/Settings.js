import React from "react"
let wakeTime
let sleep
export default class Settings extends React.Component {

    handleSettingsForm = (e) => {
        e.preventDefault() 
        let wakeTime = parseInt(e.target.elements.wakehours.value.trim(), 10) * 60 + parseInt(e.target.elements.wakeminutes.value.trim(), 10)
        const sleep = parseInt(e.target.elements.sleep.value.trim(), 10)
        const error = this.props.handleSettings(wakeTime, sleep)
    }
    render() {
        return (
            <form className="settings container" onSubmit={this.handleSettingsForm}>
                <label>Wake up time: </label>   
                <select className="settings_time select select__dark" name="wakehours" defaultValue={localStorage.getItem('settings') ? Math.floor(JSON.parse(localStorage.getItem('settings')).wakeTime / 60) : 7}>
                    <option value="0">00</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                </select>  
                :
                <select className="settings_time select select__dark" name="wakeminutes" defaultValue={localStorage.getItem('settings') ? JSON.parse(localStorage.getItem('settings')).wakeTime % 60 : 0}>
                    <option value="0">00</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
                <br/>
                <label>Amount of sleep: </label>
                <select className="settings_sleep select select__dark" name ="sleep" defaultValue={localStorage.getItem('settings') ? JSON.parse(localStorage.getItem('settings')).sleep : 8}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select> hours
                <br/>

                <button className="button" type="submit">Apply</button>
            </form>
        )
    }
}
// defaultValue={JSON.parse(localStorage.getItem('settings')).sleep}
// defaultValue={JSON.parse(localStorage.getItem('settings')).wakeTime % 60}
// defaultValue={JSON.parse(localStorage.getItem('settings')).wakeTime}