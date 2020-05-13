import Head from 'next/head'
import {Navbar} from '../components/navbar'
import Block1 from '../components/home/block1-home'
import Block2 from '../components/home/block2-home'
import Block3 from '../components/home/block3-home'
import {Footer} from '../components/footer'


function Home() {
  const title = 'home'
  
  return <>
      <Head>
        <title>Diaz web App - {title}</title>
        <meta name="description" content="Desarrollo de aplicaciones móviles, aplicaciones web y otros tipos de software adaptados a la necesidad del cliente. Marketing online y estrategias seo."/>
        
      </Head>
      <Navbar navStatus={title} />

      <main>
      <Block1/>
      <Block2/>
      <Block3/>
      <Footer/>
      </main>
  </>

}

export default Home
