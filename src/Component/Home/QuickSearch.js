import React, {Component} from 'react';
import QuickDisplay from './QuickDisplay';

const url = "https://naturewithcode.herokuapp.com/booking";

class QuickSearch extends Component {
    constructor(){
        super()
        
        this.state={
            booking:''
        }
    }
    render(){
        return(
            <QuickDisplay tripdata={this.state.booking}/>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({booking:data})
        })
    }
}
export default QuickSearch;