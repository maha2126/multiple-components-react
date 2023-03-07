import React from 'react';
import './App.css'
import ModuleList from './ModuleList';
import MyCourse from './MyCourse';


class App extends React.Component{
    state = {
        courses: [],
        modules: [],
        info:{amount:0, duration:0}
    }
    addModuleToCourse(id){
        this.setState(current =>{
            let mod = current.modules.find(elm => elm.id == id)
            if(!current.courses.includes(mod)){
                current.courses.push(mod)
            }
            current.info.amount = current.courses.reduce((a,b) => a+b.duration*b.pricePerMonth, 0)
            current.info.duration = current.courses.reduce((a,b) => a+b.duration,0)
            return current

        })
    }
    
    componentDidMount(){
        fetch("data.json")
        .then(response => response.json())
        .then(data=>{
            this.setState({modules:data.modules})
        })
    }
  
    render(){
        const {amount,duration} = this.state.info
        return <div>
            <h1>Let's create a course for you!</h1>
            <h3>Total Amount - {amount} AMD</h3>
            <h3>Total Duration - {duration} months</h3>
            <div id='main'>
                <ModuleList
                        onSelect = {(id) => this.addModuleToCourse(id)}
                         modules = {this.state.modules}/>
                <MyCourse subject = {this.state.courses}/>
            </div>
        </div>
    }
}

export default App