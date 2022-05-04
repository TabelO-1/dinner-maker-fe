import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import foodImg from "./food.jpeg";
import NewMealForm from "./newMealForm.js";

class Meals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      modalSwitch: false,
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/meals`;
      const mealResponse = await axios.get(url);
      console.log(mealResponse);
      this.setState({
        meals: mealResponse.data
      });
    } catch (e) {
      console.error(e);
    }
  };

  handleClose = () => {this.setState({modalSwitch: false})}
  createMeal = async (meal) => {
    const config = {
      method: "post",
      baseURL: process.env.REACT_APP_SERVER,
      url: "/meals/",
      data: meal,
    };
    let mealresults = await axios(config);
    const updateMealss = [...this.state.meals, mealresults.data];
    this.setState({meals: updateMeals})
  }
  poisonRemoval = async (poison) => {
    try {
      const proceed = window.confirm(`Do you wish to burn ${poison.name}?`);
      if (proceed) {
        let nonPoison = this.state.meals.filter(meal => meal._id !== poison._id);
        this.setState({meals: nonPoison});
        const config = {
          method: "delete",
          baseURL: process.env.REACT_APP_SERVER,
          url: `/meals/${poison._id}`
        }
        await axios(config);
      }
    } catch(e) {
      console.error(e)
    }
  }
  render() {
    return (
      <div className="center">
        <h2>Easy to use Dinner-Maker</h2>
        <Button onClick={() => this.setState({modalSwitch: true})}>Add a Meal!</Button>
        {this.state.modalSwitch && (
          <NewMealForm modalSwitch={this.state.modalSwitch} handleClose={this.handleClose} createMeal={this.createMeal} />)
          }

        {this.state.meals.length ? (
        <Container>
          <Carousel>
            {this.state.meals.map(meal => (
              <Carousel.Item key={meal._id}>
                <img className="d-block w-100" id="bookImg"src={meal.url ? meal.url : foodImg} alt={meal.name} />
                <Carousel.Caption>
                  {meal.name ? (<h3>{meal.name}</h3>) : (<h3>Unknown Recipe</h3>)}
                  {meal.cuisine ? (<h4>{cuisune.desc} Cuisine.</h4>) : (<h4>Unknown Cuisine</h4>)}
                  {meal.desc && meal.recipe ? (<p>{meal.desc}. Recipe: <br></br>{meal.recipe}</p>) : (<p>No Description found.</p>)}
                  <Button onClick={() => this.poisonRemoval(meal)}>Remove this meal!</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        ) : (
          <h3>No Meals Found :(</h3>
        )}
      </div>
    );
  }
}

export default Meals;
