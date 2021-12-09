import {Cube,IconDwa, IconHTHM5, Mobile} from './icons'
import Link from 'next/link'

type Props={
    show:boolean
    setShow:(param:any)=>void
}

export const Navigation = ({show,setShow}:Props) => {
    
    return (<>
            <nav> 
                <div className="toolbar">
                    <Link href="/" >
                        <a className="logo-header" onClick={()=>setShow(false)} >
                            <IconDwa width={32} height={32} />
                            <b>Diaz web app</b>
                        </a>
                    </Link>  
                </div>     
                <hr/>        
                <Link href="/paginas-web" >
                    <a className="icon_btn" onClick={()=>setShow(false)}><IconHTHM5/> <b>Paginas web</b></a>
                </Link>
                <Link href="/desarrollo-aplicaciones-moviles" >
                    <a className="icon_btn" onClick={()=>setShow(false)}><Mobile/> <b>Desarrollo movil</b></a>
                </Link>
                <Link href="/desarrollo-api" >
                    <a className="icon_btn" onClick={()=>setShow(false)} ><Cube/> <b>Api's</b></a>
                </Link>

            </nav>
            <div className="bg_nav" onClick={()=>setShow(false)} ></div>
                <style jsx>
                    {
                        `
                        nav, .bg_nav{
                            position:fixed;
                            top:0;
                            left:${show?'0':'-100%'};
                            width:100%;
                            bottom:0;
                        }
                        nav{
                            width:250px;
                            max-width:250px;
                            overflow-y:auto;
                            overflow-x:hidden;
                            background:var(--theme-color);
                            z-index:102;
                        }
                        .bg_nav{
                            z-index:101;
                            background:rgba(0,0,0, .7);
                        }
                        nav > a{
                            border-bottom:1px solid var(--shadow-color);
                            justify-content: flex-start;
                            padding:10px 2px;
                        }
                        nav > a b{
                            margin-left:5px;
                        }
                        nav > a:hover{
                            border-color:1px solid var(--primary-color);
                        }
                        `
                    }
                </style>
            </>
    )
}