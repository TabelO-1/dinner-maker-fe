import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class NewBookForm extends React.Component {
  newBook = (e) => {
    e.preventDefault()
    const newBook = {
      title: e.target.bookName.value,
      desc: e.target.desc.value,
      author: e.target.author.value,
      series: e.target.series.value,
      book: e.target.bookNum.value,
      status: e.target.status.value,
    }
    this.props.createBook(newBook);
    this.props.handleClose();
  }
  render() {
    return (
      <Modal show={this.props.modalSwitch} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Book</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.newBook}>
          <Form.Group controlId="bookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Book Name" />
          </Form.Group>
          <Form.Group controlId="desc">
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" placeholder="Book Description" />
          </Form.Group>
          <Form.Group controlId="author">
            <Form.Label>Book Author</Form.Label>
            <Form.Control type="text" placeholder="Book Author" />
          </Form.Group>
          <Form.Group controlId="series">
            <Form.Label>Book Series</Form.Label>
            <Form.Control type="text" placeholder="Book Series" />
          </Form.Group>
          <Form.Group controlId="bookNum">
            <Form.Label>Book Number</Form.Label>
            <Form.Control type="text" placeholder="Book Number" />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Book Status</Form.Label>
            <Form.Control as="select">
              <option value="FAVORITE">FAVORITE</option>
              <option value="RECOMENDED">RECOMENDED</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit">Add Book</Button>
        </Form>
        <Modal.Footer>
          <Button>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewBookForm;