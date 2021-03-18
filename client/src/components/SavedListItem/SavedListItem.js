import React from 'react';

function ResultListItem(props) {
    const {title, authors, image, link, description, deleteGoogleBook} = props
    return (
        <div style={{padding: "10px"}}>
            <div className="card" >
                    <div className="card-body">
                    
                    <h5 className="card-title">{title}</h5>
                    <p style={{fontStyle: "italic"}}>Author(s): {authors}</p>
                    <img src={image} style={{maxWidth: "100px"}} alt="jumbotron"/>
                    <p></p>
                    <p className="card-text" >{description}</p>
                    <p></p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn" style={{marginRight: "6px", backgroundColor: "#2b56d6", color: "white"}}>View Book</a>
                    <button onClick={deleteGoogleBook.bind(this, props)} className="btn btn-primary">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default ResultListItem;