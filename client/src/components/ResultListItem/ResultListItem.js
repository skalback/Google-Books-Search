import React, { Component } from 'react';
// import API from "../../utils/API";

class ResultListItem extends Component {

    state = {
        mounted: false,
        bgColor: "#2b56d6",
        color: "white",
        text: "Save Book"
    }
    
    componentDidMount = () => {
        this.setState({
            mounted: true
        })
        console.log("Retrieved")
    }

    getStyle = () => {
        if (this.state.text === "Save Book") {
            this.setState({
                bgColor: "#2fa329",
                color: "white",
                text: "Saved to List"
            })
        }
        else {
            this.setState({
                bgColor: "#2b56d6)",
                color: "white",
                text: "Save Book"
            })
        }   
    }



    onClickFunc = () => {
        this.props.saveGoogleBook(this.props)
        this.getStyle();
    }

    
    render () {
        
        const {book} = this.props

        return (

            <div style={{padding: "10px"}}>
                <div className="card">
                        <div className="card-body">
                        
                        <h5 className="card-title">{this.props.title}</h5>
                        <p style={{fontStyle: "italic"}}>Author(s): {this.props.authors}</p>
                        <img src={this.props.image} style={{maxWidth: "100px"}} alt="book"/>
                        <p></p>
                        <p className="card-text" >{this.props.description}</p>
                        <p></p>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                        <button onClick={this.onClickFunc} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} className="btn">{this.state.text}</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ResultListItem;





