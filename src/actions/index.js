import { EDIT_TASK } from "../actions/types"
import { CREATE_TASK } from "../actions/types"
import { REMOVE_TASK } from "../actions/types"

import uuid from 'react-uuid'

export const editTask = (id, params = { }) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      params,
    }
  }
}

export const createTask = ({title, desciption}) => {
  return {
    type: CREATE_TASK,
    payload: {
      id: uuid(),
      title,
      desciption,
      status: 'Unstarted'
    }
  }
}

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id,
    }
  }
