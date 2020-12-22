import '../styles.css'
import Layout from '../../components/layout'
import HeadLine from './components/headline'
import Sobre from './components/sobre'
import ComoFunciona from './components/comoFunciona'
import InfoRow from './components/infoRow'
import Depoimentos from './components/depoimentos'
import Partners from './components/partners'
import Proposta from './components/proposta'
import Assine from './components/assine'
import Pixel from '../../components/utils/pixel'

const Index = () => (
    <Layout content={(
        <div>
  
          <head>
            <Pixel name="FACEBOOK_PIXEL_1"></Pixel>
          </head>
          <HeadLine></HeadLine>
          <Sobre></Sobre>
          <ComoFunciona></ComoFunciona>
          <InfoRow></InfoRow>
          <Depoimentos></Depoimentos>
          <Partners></Partners>
          <Proposta></Proposta>
          <Assine></Assine>   
        </div>
      )}/>
    )

export default Index