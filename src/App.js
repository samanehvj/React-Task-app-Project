import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



function App() {
  const[tasks,setTasks] = useState([
    {
                id:1,
                text:'Read book',
                day:'Monday',
                reminder:true,
        
        
            },
        
            {
                id:2,
                text:'Meet my bffs',
                day:'SAT',
                reminder:true,
        
        
            },
        
            {
                id:3,
                text:'Fix my nail',
                day:'Friday',
                reminder:false,
        
        
            },
])
// detele
const deletTask = (id)=>{
setTasks(tasks.filter((task)=>task.id !== id))
};

// reminder
const toggleReminder=(id)=>{
setTasks(tasks.map((task)=>
task.id === id ?{...task,reminder:!task.reminder} : task,
))
}

// save
const addTask =(task) => { 
const id = Math.floor(Math.random()* 10000) + 1;
const newTask = {id,...task};
setTasks([...tasks,newTask]);
}

  return (
    <div className="container">
      <Header title = "Worker function"/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
         <Tasks onToggle={toggleReminder}onDelete={deletTask} tasks={tasks}/>
      ):(
        "No more Function"
        )}
    </div>

  );
}

export default App;
 