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
        <Menu menuButton={<MenuButton>Settings</MenuButton>}>
            
            <Settings handleSettings={props.handleSettings} wakeTime={props.wakeTime} sleep={props.sleep} />
            
        </Menu>
        </div>
    </div>
)

export default Header

