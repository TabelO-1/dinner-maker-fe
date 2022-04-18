import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import bookImg from "./book.jpeg";
import NewBookForm from "./newBookForm.js";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modalSwitch: false,
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/books`;
      const bookResponse = await axios.get(url);
      console.log(bookResponse);
      this.setState({
        books: bookResponse.data
      });
    } catch (e) {
      console.error(e);
    }
  };

  handleClose = () => {this.setState({modalSwitch: false})}
  createBook = async (book) => {
    const config = {
      method: "post",
      baseURL: process.env.REACT_APP_SERVER,
      url: "/books/",
      data: book,
    };
    let bookresults = await axios(config);
    const updateBooks = [...this.state.books, bookresults.data];
    this.setState({books: updateBooks})
  }
  render() {
    return (
      <div className="center">
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button onClick={() => this.setState({modalSwitch: true})}>Add a Book!</Button>
        {this.state.modalSwitch && (
          <NewBookForm modalSwitch={this.state.modalSwitch} handleClose={this.handleClose} createBook={this.createBook} />)
          }

        {this.state.books.length ? (
        <Container>
          <Carousel>
            {this.state.books.map(book => (
              <Carousel.Item key={book._id}>
                <img className="d-block w-100" src={bookImg} alt={book.title} />
                <Carousel.Caption>
                  {book.title ? (<h3>{book.title}</h3>) : (<h3>Unknown title</h3>)}
                  {book.author ? (<h4>By {book.author}.</h4>) : (<h4>Unknown Author</h4>)}
                  {book.series && book.book ? (<p>{book.series} Book {book.book}.</p>) : (<p>Single Book</p>)}
                  {book.desc ? (<p>{book.desc}</p>) : (<p>No Description Available</p>)}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </div>
    );
  }
}

export default BestBooks;
