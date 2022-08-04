import React from "react";

export default class SibilingsComponent extends React.Component {
    constructor() {
        super();

    }
    newfunction() {
        var data = document.getElementById('news').value;
        console.log(data);
        this.props.newdata(data);
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="well">
                            <input type="text" placeholder="Search News Here" id="news" style={{ "width": "100%", "height": "50px" }} /><br /><br />
                            <input type="button" className="btn btn-primary btn-lg" value="search" onClick={this.newfunction.bind(this)} style={{ "margin-left": "45%" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}