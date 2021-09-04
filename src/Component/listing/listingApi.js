import React, {Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';

const url ="http://localhost:9800/types?service"

class Listing extends Component{
    constructor(){
        super()

        this.state={
            types:''
        }
    }
    render(){
        return(
            <div className="row">
                {/* <div className="col-md-2">
                    Filter

                </div> */}
                <div className="col-md-10">
                  <ListingDisplay listdata={this.state.types}/>  
                </div>
            </div>
        )
    }
    componentDidMount(){
        let tripId = this.props.match.params.id;
        axios.get(`${url}/${tripId}`)
        .then((res)=>{this.setState({types:res.data})})


    }
}
export default Listing;