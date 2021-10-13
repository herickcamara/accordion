import './header.css'

export default ({name}) =>{
    const accorder= ()=>{
        console.log(document.querySelector('[hc-dev="body"]').classList.toggle('active'))
    
    
    }
    const Sair =()=>{
        localStorage.removeItem('@logado')
        window.location.reload()
    }

    return(
        <header >
            <div>
                <h1>Show de Perguntas e Resposta</h1>
            </div>
            <div className="menu">
                <div  className='saldasao'>
                    Olá { name.toLowerCase() }
                </div>
                <div  className="img">
                    <div onClick={accorder} className="photo">
                    { name[0][0].toUpperCase() }
                    </div>
                
                <div hc-dev="body" className="sair">
                    <li onClick={Sair} >Sair</li>
                </div>
                </div>

                </div>
        </header>
    )
}