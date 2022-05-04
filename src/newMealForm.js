import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class NewMealForm extends React.Component {
  newMeal = (e) => {
    e.preventDefault()
    const newMeal = {
      name: e.target.mealName.value,
      desc: e.target.desc.value,
      recipe: e.target.recipe.value,
      cuisine: e.target.cuisine.value,
    }
    this.props.createMeal(newMeal);
    this.props.handleClose();
  }
  render() {
    return (
      <Modal show={this.props.modalSwitch} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Meal</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.newMeal}>
          <Form.Group controlId="mealName">
            <Form.Label>Meal Name</Form.Label>
            <Form.Control type="text" placeholder="Meal Name" />
          </Form.Group>
          <Form.Group controlId="desc">
            <Form.Label>Meal Description</Form.Label>
            <Form.Control type="text" placeholder="Meal Description" />
          </Form.Group>
          <Form.Group controlId="recipe">
            <Form.Label>Meal Recipe</Form.Label>
            <Form.Control type="text" placeholder="Meal Recipe" />
          </Form.Group>
          <Form.Group controlId="cuisine">
            <Form.Label>Cuisine</Form.Label>
            <Form.Control type="text" placeholder="Cuisine" />
          </Form.Group>
          <Button type="submit">Add Meal</Button>
        </Form>
        <Modal.Footer>
          <Button>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewMealForm;