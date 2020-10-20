import { EDIT_TASK } from "../actions/types";
import { CREATE_TASK } from "../actions/types";

const initState = [
  // {
  //   id: 1,
  //   title: "Task 1",
  //   description: "Description 1",
  //   status: "In Progress"
  // },
  // {
  //   id: 2,
  //   title: "Task 2",
  //   description: "Description 2",
  //   status: "Unstarted"
  // },
  // {
  //   id: 3,
  //   title: "Task 3",
  //   description: "Description 4",
  //   status: "Completed"
  // }
];

const tasks = (state= {tasks: initState}, action) => {
/* +++++++++++++++++++++++++++++++++++++++++++++++
              if else Version
++++++++++++++++++++++++++++++++++++++++++++++++*/

  // if(action.type === EDIT_TASK) {
  //   const {payload} = action;
  //   return {
  //     tasks: state.tasks.map(task => {
  //       if(task.id === payload.id) {
  //         return Object.assign({}, task, payload.params)
  //       }
  //       return task;
  //     })
  //   }
  // }

/* +++++++++++++++++++++++++++++++++++++++++++++++
              switch Version (Usally)
++++++++++++++++++++++++++++++++++++++++++++++++*/
const {payload} = action;
switch(action.type){
  case EDIT_TASK: {
    return {
      tasks: state.tasks.map(task => {
        if(task.id === payload.id) {
          return Object.assign({}, task, payload.params);
          }
          return task;
        })
    }
  }
  case CREATE_TASK: {
    return {
      tasks: state.tasks.concat(action.payload),
    };
  }
  default: 
    return state;
}};

export default tasks;