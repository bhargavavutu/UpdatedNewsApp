import React from "react";
import DisplayDrinks from './DisplayDrinks';
export default class GetDrinksGen extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        console.log(this.props.DrinksArray);
        var newDrinks = this.props.DrinksArray.map(function(Eachdrink) {
                
            
        return(
          <DisplayDrinks dataa = {Eachdrink}></DisplayDrinks>
         
        )
        })
        return(
            <div>
                {newDrinks}
                {/* <DisplayDrinks dataa = {Eachdrink}></DisplayDrinks> */}
            </div>
        )
    }
}