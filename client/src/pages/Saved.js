import React, { Component } from 'react'
import { Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from '../utils/API';
import SavedList from "../components/SavedList/SavedList";

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("Book has been deleted:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("*** ERROR **** ", err);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("GET BOOKS *** ", res);
        })
        .catch(err => {
            console.log("**** ERROR ****", err);
        })
    }


    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                <Jumbotron />
                {this.state.savedBooks.length ? (
                    <SavedList 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedList>
                ) : (
                    <h5>There are no books are currently saved.</h5>
                )}
                </Container>
            </div>
        )
    }
}

export default Saved
