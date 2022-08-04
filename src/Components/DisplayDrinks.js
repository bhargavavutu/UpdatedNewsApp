import React from "react";
import '../App.css';
export default class DisplayDrinks extends React.Component {
    constructor() {
        super();

    }

    render() {
        console.log(this.props.dataa);
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="well">
                            <div className="col-md-3">
                            <img src={this.props.dataa.strDrinkThumb} width="200px" height= "200px"></img>
                            </div>
                            <div className="col-md-6">
                                <div className="id">
                                    {this.props.dataa.idDrink}
                                </div>
                                <div className = "drinkName">
                                   <b> {this.props.dataa.strDrink}</b>
                                </div>
                                <div>
                                  <h4>  <ul>
                                        <li>{this.props.dataa.strIngredient1}</li>
                                        <li>{this.props.dataa.strIngredient2}</li>
                                        <li>{this.props.dataa.strIngredient3}</li>
                                        <li>{this.props.dataa.strIngredient4}</li>
                                    </ul></h4>
                                </div>
                                <div className ="well">
                                    <h4><p>{this.props.dataa.strInstructions}</p></h4>
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-lg">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}