import './style.css'
import HomeSetion from '../common/homeSection'
import CustomInput from '../../../../components/utils/customInput'
import CallButton from '../../../../components/utils/callbutton'
import { useState } from 'react'
import { legacyApi } from '../../../../services/api' 
import Modal from '../../../../components/utils/modal'
export default () =>{
  const title = "Quer continuar por dentro das novidades sobre inglês?"
  const subtitle = "Assine a nossa newsletter e receba dicas, conteúdos e informações sobre inglês e cultura em torno da língua."
  const [ entries, setEntries ] = useState({
    email: "sadasdsad",
    name:"   "
  })
  const [ modalConfig, setModalConfig ] = useState({
    show:false,
    message:"",
    type:"success"
  })

  const handleInputChange = (name, value) =>{
    let entradas = { ...entries }
    entradas[name] = value
    setEntries(entradas); 
  } 

  const submitEmail = async () =>{
    setModalConfig({
      show:true,
      message:"Enviando ...",
      type:""
    })
    const { email, name } = entries
    try{
      await legacyApi.post(`/emailsignature/subscribe`,{ email, name })
      setEntries({email:""})
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
      console.log(data.errors)
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

      },200000)

    }
       



  }
  const { email } = entries
  return (
    <div id="assine" className="pb-5">
      <HomeSetion title={title} subtitle={subtitle}>
       
       <div className="app-container mx756 d-flex flex-column aling-tems-end ">

        <CustomInput initial={email} label="email" name="email" onInputChange={handleInputChange}></CustomInput>
        
        <div className="mt-4">
          <CallButton onClick={submitEmail} width="300px">Assine</CallButton>
        </div>

       </div>
      </HomeSetion>

     {modalConfig.show ? <Modal type={modalConfig.type} onClose={() => setModalConfig({ ...modalConfig, show:false, message:""})}>
       {modalConfig.message}
     </Modal>: undefined}
    
    </div>
  )
}