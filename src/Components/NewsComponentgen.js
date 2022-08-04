import React from "react";
import Displaynews from './DisplaynewsComponent';
export default class NewsComponentgen extends React.Component {
    constructor() {
        super();
    }
    render() {
    var newsCollection = this.props.newsArrayRef.map(function(headlineElement) {
        
        return(
                <Displaynews dataa = {headlineElement}></Displaynews>
        )
    })
    return(
        <div>
            {newsCollection}
        </div>
    )
    }
}