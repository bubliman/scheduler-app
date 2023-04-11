import React from "react"
import Settings from "./Settings"
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'





const Header = (props) => (
    <div className="header">
        <div></div>
        <div className="header__container">
        <h1 className="header__title">Schedule maker</h1>
        <p className="header__subtitle">Plan your day out to make full use of your time! This app will automatically generate a schedule for you.</p>
        </div>
        <div className="menu">
        <Menu menuButton={<MenuButton><svg className="icon" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M216 130.16q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.6 107.6 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.29 107.29 0 0 0-26.25-10.86a8 8 0 0 0-7.06 1.48L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48a107.6 107.6 0 0 0-26.25 10.88a8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94a107.71 107.71 0 0 0-10.87 26.25a8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06a107.6 107.6 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.71 107.71 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48a107.21 107.21 0 0 0 26.25-10.88a8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94a107.71 107.71 0 0 0 10.87-26.25a8 8 0 0 0-1.49-7.06ZM128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z"/></svg></MenuButton>}>
            
            <Settings handleSettings={props.handleSettings} wakeTime={props.wakeTime} sleep={props.sleep} />
            
        </Menu>
        </div>
    </div>
)

export default Header

