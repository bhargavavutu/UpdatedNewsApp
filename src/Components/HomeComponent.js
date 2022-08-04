import React from 'react';
import SibilingsComponent from './SibilingsComponent';
import NewsComponentgen from './NewsComponentgen';
import $ from 'jquery'; 
import "../App.css";
export default class  HomeComponent extends React.Component {

    constructor() {
        super();
        this.state = {newsArry : []};        
    }

    fetchNewsAPI(msg) {
        $.ajax({
            url:"https://newsapi.org/v1/articles?source="+msg+"&sortBy=top&apiKey=70fe321ea7674105928b992f77d128fe",
            type:"GET",
            dataType:"JSON",
            success : function(msg) {
                this.setState({newsArry:msg.articles})
            }.bind(this),
            error:function(err) {
            }.bind(this)
        });
    }

    render() {
        return(
            <div>
                <h4><center><em>News Application</em></center></h4>

                <SibilingsComponent newdata={this.fetchNewsAPI.bind(this)}></SibilingsComponent>
            <NewsComponentgen newsArrayRef = {this.state.newsArry}></NewsComponentgen>
            </div>
        )
    }
}