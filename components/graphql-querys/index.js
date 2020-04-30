import { request } from 'graphql-request'
const apis = {
  uri : process.env.NODE_ENV === 'production'? 'https://backenddwa.herokuapp.com/graphql':'http://localhost:3100/graphql'
}

export const devTools = (query,estado,estado2,estado3)=>{
    request(
      apis.uri,
        query).then(data => {
          estado(data.tools[0])
          estado2(data.tools[1])
          estado3(data.tools[2])
        })
    }

export const sendEmail = async (query, setStatusSend)=>{
  
        const data = await request(apis.uri,query)
        console.log(data)
        function end() {
            setStatusSend(false)
            return 
          }

          function timeout() {
            setStatusSend('Tiempo agotado')
            setTimeout(end, 2000)
            return 
          }

          setTimeout(timeout, 25000)

        if(data.sendEmail === true ){
            setStatusSend('enviado')
            setTimeout(end, 2222)
            return
        }

        if(data.sendEmail === false ){
            setStatusSend('error')
            setTimeout(end, 2222)
            return
        }
        
      }