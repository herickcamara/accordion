import React, {useState} from 'react'
import './card.css'

export default ({card, id}) =>{
    
    const excluir =(e)=>{
        const id = e.target.dataset.idHeader
        const arrya =[]
       let elements = localStorage.getItem('@posts')
        elements = JSON.parse(elements)
        elements.filter((e, i)=> id == i ? '': arrya.push(e) )
        localStorage.setItem('@posts', JSON.stringify(arrya))
        window.location.reload()

    }
   const accorder= async (e)=>{
    const id = e.target.dataset.idHeader
    console.log(id)
    const accorderHeader =document.querySelector(`[data-id-header="${id}"]`)
    const accoderBody =document.querySelector(`[data-accorder-body="${id}"]`) 
    const accorderHeaderClosed = Array
        .from( document.querySelectorAll('[accorder-header="accorder"]'))
        .filter(e => e !== accorderHeader)
        .find(el => el.classList.contains('active') )
    
    if(accorderHeaderClosed){
        const id = accorderHeaderClosed.dataset.idHeader
        const accoderBodyClosed = document.querySelector(`[data-accorder-body="${id}"]`)
        accorderHeaderClosed.classList.remove('active')
       accoderBodyClosed.classList.remove('active')
    }
    accorderHeader.classList.toggle('active')
    accoderBody.classList.toggle('active')



}
    
    

    return(<>
        <div className="cardContener">
        <div onClick={accorder} accorder-header="accorder"  data-id-header={id} className="pergunta"  >
        <div onClick={accorder} data-id-header={id} className="contenerPergunta">

           <p onClick={accorder} data-id-header={id} > {card.pergunta} </p>
        </div>
            <span onClick={accorder}  data-id-header={id} >^</span>  
        </div>
        <span onClick={excluir} data-id-header={id} >excluir</span>
        <div data-accorder-body={id} className="resposta">
         {card.resposta}
        </div>
        </div>
    </> 
    )
}

