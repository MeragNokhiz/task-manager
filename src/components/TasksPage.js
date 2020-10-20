import React, {useState} from 'react'

const TasksPage = () => {
  const [cardForm, showCardForm] = useState(false);

  const formToggler = () => {
    showCardForm(!cardForm)
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
        <form action="">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Task Title"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Task Description"/>
        </div>
        <div type="submit" className="btn btn-primary">Submit</div>
        </form>)}
      </div>
    </div>
  )
}

export default TasksPage
