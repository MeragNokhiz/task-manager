import React, {useState} from 'react'
import TaskList from './TaskList';

const TASK_STATUSES= ["Unstarted", "In Progress", "Completed"]

const TasksPage = (props) => {
  const [cardForm, showCardForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const formToggler = () => {
    showCardForm(!cardForm)
  }

  const resetForm = () => {
    setTitle("");
    setDescription("");
    showCardForm(false);
  }

  const onCreateTask = (e) => {
    e.preventDefault();
    props.onCreateTask({
      title,
      description
    })
    resetForm();
  }

  const renderTaskLists = () => {
    const {tasks} = props;
    return TASK_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter(task => task.status === status);
      return (
        <div className="col-md-3 card m-2 p-0" key={id}>
          <TaskList 
          key={status} 
          status={status} 
          tasks={statusTasks}
          onStatusChange={props.onStatusChange}
          onRemoveChange={props.onRemoveChange}/>
        </div>
      )
    })
  }

  return (    
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-success m-3" onClick={formToggler}>+</button>
            <div className="col-md-10">
              <h2 className="display-4 text-center text-uppercase">Task Manager</h2>
            </div>
          </div>
        </div>
        {/*Input Form*/}
        {cardForm && (
        <form onSubmit={onCreateTask}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Task Title" onChange={onChangeTitle}/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Task Description" onChange={onChangeDescription}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>)}
      </div>
      <div className="row d-flex justify-content-center position-relativ" style={{background: '#e9ecf'}}>
        {renderTaskLists()}
      </div>
    </div>
  )
}

export default TasksPage
