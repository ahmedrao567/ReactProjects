
import './App.css';
import "./inde.css";

const pizzaData = [
  {
    name: "Focaaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div className="container"> 
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}
function Header() {
  return(
    
    <header className="header">
      <h1>FAST REACT PIZZA CO.</h1>
    </header>
  );
};
function Menu() {
  const pizza=pizzaData;
  const pizzas = pizza.length;
  return(
    <div className="menu">
      <h2>Our Menu</h2>
    {pizzas > 0 ? <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza
            pizzaobj={pizza}
          />
        ))}
      </ul> : <p>Sorry, we are working our menu . Visit Us</p>}
      
    {/* <Pizza 
    photoName="pizzas/spinaci.jpg"
    name="Pizza Spinaci"
    ingredient="Tomato, mozarella, mushrooms, and onion"
    price="10"/>
    <Pizza 
    photoName="pizzas/funghi.jpg"
    name="Pizza Funghi"
    ingredient="Tomato, mozarella, spinach, and ricotta cheese"
    price="12"/> */}
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const  open = 6;
  const closed = 24;
  const isOpen = hour >= open && hour < closed;
  console.log(isOpen);
  return(
    
    <footer className="footer">
      <p> {new Date().toLocaleTimeString()} {isOpen ? "We are open And Closes at 12 AM" : "We are closed And Opens at 6AM " }</p>
      <p>© 2021 Fast React Pizza Co.</p>

      <button className='btn'>Order Now</button>  
    </footer>
  );
}
function Pizza(props) {
  return (
    <li className= {`pizza ${props.pizzaobj.soldOut ? " sold-out":""}`}>
      <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name}/>
      <div>
      <h2>{props.pizzaobj.name}</h2>
      <p>{props.pizzaobj.ingredient}</p>
      <span>{props.pizzaobj.soldOut ? "SOLD OUT":props.pizzaobj.price} </span>
      </div>
    </li>
  );
};

export default App;
