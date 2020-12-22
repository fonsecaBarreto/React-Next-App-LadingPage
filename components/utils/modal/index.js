import './style.css'
import { FaTimes } from 'react-icons/fa';
import { CgDanger  } from 'react-icons/cg';
import { RiUploadCloud2Line } from 'react-icons/ri';
import { AiOutlineCheckCircle } from 'react-icons/ai';
export default (props) =>{

  const { onClose, children, type } = props
  return (
    <div className="modal-ov" >
      <div className="modal-comp">
        <div className="modal-comp-header">
          <button className="modal-button bd-red" onClick={onClose}>  <FaTimes/> </button>
        </div>
        <div className="modal-comp-body">
          <span className={
              type === "danger" ? "modal-icon mb-3" :
              type === "success" ? "modal-icon mb-3 success" :
               "modal-icon mb-3 loading"}>
            {
              type === "danger"?
              <CgDanger></CgDanger>:
              type === "success"?
              <AiOutlineCheckCircle></AiOutlineCheckCircle>:
              <RiUploadCloud2Line ></RiUploadCloud2Line>
            }
          </span>
          {children}

          <button onClick={onClose} className="ok-button">
            ok
          </button>          
          </div>
      </div>
    </div>
  )
}