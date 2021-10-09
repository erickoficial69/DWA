import Image from 'next/image'

import { useAmp } from 'next/amp'
export const config = { amp: 'hybrid' }

type Props={
    title:string,
    url_logo:string
    text1:string
    text2?:string
}
export const Intro = ({title,url_logo,text1,text2}:Props)=>{
    const isAmp = useAmp()
    return (
        <div className="intro">
            
            <div className="bg_intro" >
                <Image layout="fill" placeholder="blur" blurDataURL="/img/loading.svg" src='/img/api.svg' alt={title} />
            </div>
            
            <h1 itemProp="name" >{title}</h1>

            <div className="container_img">
            {isAmp ? (
                <amp-img
                width="250"
                height="200"
                src="/img/developer3.webp"
                alt="Desarrollo de de aplicaciones y paginas web"
                layout="responsive"
                />
            ) : (
                <Image className="image_intro" width={250} height={200} placeholder="blur" blurDataURL="/img/loading.svg"  src={url_logo} alt={title} />
            )}
            </div>

            <div>
                <p dangerouslySetInnerHTML={{__html:text1}} >
                </p>
                <p dangerouslySetInnerHTML={{__html:text2?text2:''}} >
                </p>
            </div>
            <style jsx  >
                {
                    `
                    .intro{
                        display: grid;
                        grid-template-columns:1fr;
                        place-content:center;
                        place-items:center;
                        position:relative;
                        padding:30px 0;
                    }
                    .bg_intro{
                        z-index:-2;
                        opacity:0.2;
                    }
                    .intro > h1{
                        margin:20px auto;
                        color:var(--primary-color);

                    }
                    .container_img,.intro > h1,p{
                        text-align: center;
                    }
                    p{
                        padding:10px;
                        margin:10px auto;
                        font-size:1.2em;
                    }
                    
                    @media(min-width:810px){
                        .intro{
                            grid-template-columns:260px 1fr;
                        }
                        .intro > h1{
                            grid-column:1 / span 2;
                        }
                    }
                    @media(min-width:1080px){
                        .intro{
                            grid-template-columns:300px 1fr;
                        }
                    }
                    `
                }
            </style>
        </div>
    )
}