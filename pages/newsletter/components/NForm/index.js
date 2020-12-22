import CustomInput from '../../../../components/utils/customInput'
import { useState } from 'react'
import Modal from '../../../../components/utils/modal'
import { legacyApi } from '../../../../services/api'
import './style.css'
const NForm  = () => {
  const [ email, setEmail ] = useState('')
  const [ modalConfig, setModalConfig ] = useState({
    show:false,
    message:"",
    type:""
  })

  const submitEmail = async () =>{
    const name = " "
    setModalConfig({
      show:true,
      message:"enviando...",
      type:"loading"
    })
    try{
      await legacyApi.post(`/emailsignature/subscribe`,{ email, name })
      setEmail("")
      setModalConfig({
        show:true,
        message:"Email Cadastrado com sucesso",
        type:"success"
      })
      setTimeout(() => {
        setModalConfig({
          show:false,
          message:"",
          type:"danger"
        })
        window.location.href="/obrigado" 
      },1600)
    }catch(err){
      const { data, status } = err.response 
      if(status === 422){
        setModalConfig({
          show:true,
          message:data.errors[0].msg || "Existe algo de Errado com o email informado!",
          type:"danger"
        })
      } 

      setTimeout(() => {
        setModalConfig({
          show:false,
          message:"",
          type:"danger"
        })

      },6000) 

    }
  }
      
  return(
    <div className="nform">
      <CustomInput sb placeHolder="Seu melhor e-mail aqui" onInputChange={(name, value)=>setEmail(value)}></CustomInput>
      <button className="nbutton" onClick={submitEmail}>  Me inscrever  </button>
      { modalConfig.show ? <Modal   type={modalConfig.type} onClose={() => setModalConfig({ ...modalConfig, show:false, message:""})} >
        {modalConfig.message}
      </Modal> : undefined }
    </div>
  )
}


export default NForm