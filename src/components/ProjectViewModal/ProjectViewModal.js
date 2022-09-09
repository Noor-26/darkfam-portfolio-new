import React from 'react'
import { useDispatch } from 'react-redux'
import { projectView } from '../Redux/Action/BookActions'

const ProjectViewModal = ({ modal, children }) => {
  const dispatch = useDispatch()
  const removeProject = () => {
    dispatch(projectView([]))
  }
  return (
    <>
     <input type="checkbox" id={modal} className="modal-toggle" />
      <div className="modal custom_modal_wrapper">
        <div className="modal-box relative">
        <label
          htmlFor={modal}
          className="btn btn-sm btn-circle absolute right-2 top-2 btn-primary text-white hover:bg-white hover:text-primary hover:border-2"
        onClick={removeProject}
        > 
          ✕
        </label>
        {children}
      </div>
    </div>
  </>
  )
}

export default ProjectViewModal