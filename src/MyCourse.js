import React from "react";
import ModuleItem from "./ModuleItem";

class MyCourse extends React.Component{

    render(){
        const {subject} = this.props

        return <div className="my-course">
            {
                subject.map(elm => {
                    return <ModuleItem key={elm.id}{...elm}/>
                    /* return <div key={elm.id}>
                        <h3>{elm.title}</h3>
                    </div> */
                })
            }
        </div>
    }
}

export default MyCourse