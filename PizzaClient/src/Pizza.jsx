import { useState, useEffect } from "react";
import PizzaList from './PizzaList'

const term = "Pizza";
function Pizza() {
 const [data, setData] = useState([]);
 const [maxId, setMaxId] = useState(0);

 useEffect(() => {
  fetchPizzaData();
 }, []);

 const fetchPizzaData = () => {
  // simulate fetching data from API
  const pizzaData = [
   { id: 1, name: 'Margherita', description: 'Tomato sauce, mozarella, and basil' },
   { id: 2, name: 'Pepperoni', description: 'Tomato sauce, mozarella, and pepperoni' },
   { id: 3, name: 'Hawaiian', description: 'Tomato sauce, mozarella, and pineapple' },
  ];

  setData(pizzaData);
  setMaxId(Math.max(...pizzaData.map(pizza => pizza.id)));
 };

 // Create
 const handleCreate = (item) => {
  // Simulate creating an item on API
  const newItem = { ...item, id: data.length + 1 };
  setData([...data, newItem]);
  setMaxId(maxId + 1);
 };
 
 // Update
 const handleUpdate = (item) => {
  // Simulate updating an item on API
  const updatedData = data.map(pizza => pizza.id === item.id ? item : pizza);
  setData(updatedData);
 };

 // Delete
 const handleDelete = (id) => {
  // Simulate deleting an item on API
  const updatedData = data.filter(pizza => pizza.id !== id);
  setData(updatedData);
 };
 
 return (
  <div>
   <PizzaList
    name={term}
    data={data}
    onCreate={handleCreate}
    onUpdate={handleUpdate}
    onDelete={handleDelete}
   />
  </div>
 );

}

export default Pizza;