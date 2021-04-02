import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';


import Tasks from './components/Tasks';
import AddTask from './components/AddTask';




function App() {
  const [showAddForm,setshowAddForm] = useState(false)
  const[tasks,setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    };
   getTasks();
  }, []);

  const fetchTasks = async () => {
    const result = await fetch ('http://localhost:8000/task');
    const data =  await result.json();

    return data; 
  };
// detele
const deletTask = async (id)=> {
  await fetch(`http://localhost:8000/task/${id}`, {
    method: 'DELETE',
});
setTasks(tasks.filter((task)=>task.id !== id))
};

// reminder
const toggleReminder = async (task) => {
  const updatedTask = { ...task, reminder: !task.reminder };

  const result = await fetch(`http://localhost:8000/task/${task.id}`, {
      method: 'PUT',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
  });

  const data = await result.json();

  setTasks(
      tasks.map((item) =>
          item.id === task.id
              ? { ...item, reminder: data.reminder }
              : item,
      ),
  );
};

// save
const addTask = async (task) => { 
  const result = await fetch('http://localhost:8000/task', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
});

const data = await result.json();

setTasks([...tasks, data]);

// const id = Math.floor(Math.random()* 10000) + 1;
// const newTask = {id,...task};
// setTasks([...tasks,newTask]);
};
  return (
    <Router>
    <div className="container">
      <Header 
      showAddForm ={showAddForm}
      onAdd ={()=> setshowAddForm(!showAddForm)}
      title = "Tasks"/>
     {showAddForm && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
         <Tasks onToggle={toggleReminder}onDelete={deletTask} tasks={tasks}/>
      ):(
        "No more Function"
        )}
        <Route path="/about" component={About}/>

        <Footer />
    </div>
    </Router>
  );
}

export default App;
 