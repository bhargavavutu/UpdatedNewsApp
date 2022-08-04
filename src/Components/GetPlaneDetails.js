import React from "react";
import $ from 'jquery'; 
import GetDrinksGen from '../Components/GetDrinksgen';
export default class Plane extends React.Component {
    constructor() {
        super();
        this.state={DrinksArray :[]};
        this.fetchPlaneDetails();
    }
    fetchPlaneDetails() {
        $.ajax({
            url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
            method:"GET",
            dataType :"JSON",
            success : function(msg) {
                this.setState({DrinksArray : msg.drinks})
                console.log(msg.drinks);
            }.bind(this),
            error :function(err) {

            }.bind(this)
        })
    }
    render() {
        return(
            <div>
               {/* <button className="btn btn-primary" onClick={this.fetchPlaneDetails.bind(this)}>Get details in console</button> */}
                <GetDrinksGen DrinksArray =  {this.state.DrinksArray}></GetDrinksGen>
               
            </div>
        )
    }
}