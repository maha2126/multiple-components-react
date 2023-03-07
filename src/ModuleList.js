import React from 'react';
import ModuleItem from './ModuleItem';

class ModuleList extends React.Component{

    render(){
        const {modules, onSelect} = this.props
        return <div className="module-list">
            <h3>Module List</h3>
            {
                modules.map((elm,index) => <ModuleItem
                 key={elm.id} 
                 onSelectModule = {onSelect}
                 {...elm}/>)
            }
        </div>
    }
}

export default ModuleList