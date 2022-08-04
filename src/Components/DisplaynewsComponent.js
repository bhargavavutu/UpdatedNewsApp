import React from "react";

export default class Displaynews extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div class="col-sm-6">
                            <img src={this.props.dataa.urlToImage} width="500px" height="300px"></img>
                        </div>
                        <div className="col-sm-6">
                            <h4><b>{this.props.dataa.title}</b></h4>
                            <h4>{this.props.dataa.author}</h4>
                            <a href="">url:{this.props.dataa.url}</a><br /><br />
                            <h5><b>Description :</b></h5>
                            <div className="well">
                                <h4>{this.props.dataa.description}</h4>
                            </div>

                            <input type="button" className="btn btn-info" value="save" /><br /><br />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}