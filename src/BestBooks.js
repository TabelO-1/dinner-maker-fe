import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import bookImg from "./book.jpeg";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
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

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
        <Container>
          <Carousel>
            {this.state.books.map(book => (
              <Carousel.Item key={book._id}>
                <img className="d-block w-100" src={bookImg} alt={book.title} />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <h4>By {book.author}.</h4>
                  <p>
                    {book.series} Book {book.book}
                  </p>
                  <p>{book.desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
