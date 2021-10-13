import {Component} from   'react'
import './home.css'
import { Global } from './globalStyled'
import Header from '../../components/Header'
import Card from '../../components/Card'

const posts = localStorage.getItem('@posts')
let user = localStorage.getItem('@user')
user = JSON.parse(user)
const name = user.name 
const initialState=  {
    name: name,
    pergunta:'',
    resposta: '',
    contador:0,
    data: JSON.parse(posts) || [],
}
export default class Home extends Component {
    state = {...initialState}

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.pergunta == '' || this.state.resposta == '')
          return  alert('preencha todos os campos')
        const cont = this.state.contador
        const data = this.state.data

        const newPost = {
            pergunta: this.state.pergunta,
            resposta: this.state.resposta,
        } 
        data.push(newPost)

        this.setState({data, contador: this.state.contador + 1})
        localStorage.setItem('@posts', JSON.stringify(data))
        window.location.reload()
    }


    render(){

        return(<>
                {/* <Global /> */}
            <Header name={ this.state.name } />
            <section >
            <div className="contener">
                <div className="postar">
                    <textarea 
                        maxLength="23" 
                        onChange={e => this.state.pergunta = e.target.value} 
                        placeholder="Pergunta Máxima de 23 Caracteres" 
                        type="text"/>
                    <textarea 
                        maxLength="23"  
                        onChange={e => this.state.resposta = e.target.value}  
                        placeholder="Resposta Máxima de 23 Caracteres"   
                        type="text"/>
                    <button onClick={this.handleSubmit}>Enviar</button>
                </div>
                <aside>
                   {this.state.data.map((card, i)=><Card card={card} id={i} key={i} />  )} 
                </aside>
            </div>
            </section>
        </>)
    }
}