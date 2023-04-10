

import React from "react"

const Title = (props) => {
    const date = new Date
 return (
    <div className="title">
        <h2>{`Schedule for ${date.getDate()}.${date.getMonth()+1}. ${date.getFullYear()} `}</h2>
    </div>
 )
 

}

export default Title

