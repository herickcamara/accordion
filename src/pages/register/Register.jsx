import {Component} from 'react'
import './registerLogin.css'
const initialState =  { 
    accoder: '',
    register:{
        name:'',
        email: '',
        password: '',
    },
    login:{
        email: '',
        password: '',
    }
}
export default class Register extends Component {
 state = {...initialState}
   
 
 login = async (e)=>{
     e.preventDefault()
    console.log(this.state.login.email)
    const users = await localStorage.getItem('@user');
    const user = JSON.parse(users)
    const dados ={...this.state.login}
    console.log(user)
    if( user.email == dados.email ){
        
        if(user.password == dados.password ){
            await localStorage.setItem('@logado', JSON.stringify('true'))
            
            window.location.reload()
            
        }else{
            console.log('error pass...')
        }
    }else{
        console.log('email error')
    }
}

handleSubmit = (e) => {
    e.preventDefault(); 
    const username = {...this.state.register}
   
    localStorage.setItem('@user',JSON.stringify(username) );
    
    window.location.reload()
  }



 accorder= (e)=>{
     const id = e.target.dataset.idHeader
     const form =  (document.querySelector(`[hc-dev="${id}"]`))
    if(id == this.state.accoder){
        document.querySelector('.active').classList.remove('active')
        this.setState({accoder:''})
    }else{
       const clear =Array.from( document.querySelectorAll('form'))
       clear.map(e => e.classList.remove('active')) 
       form.classList.toggle('active')
        this.setState({accoder: id})

    }

 }
 render(){

        return (
            <div className="contener" >
                <div className="form">
                    <div data-id-header='1' onClick={this.accorder}  className="acorde">

                        Login
                    </div>
                <form hc-dev="1" >
                        <input onChange={e => this.state.login.email= e.target.value} placeholder="E-mail" type="text"/>
                        <input onChange={e => this.state.login.password= e.target.value} placeholder="Password" type="password"/>
                        <div  >
                          <button onClick={this.login}>Entra</button>    
                        </div>
                    </form>
                    <div data-id-header='2'  onClick={this.accorder} className="acorde" >
                        Cadastrar
                    </div>
                    <form hc-dev="2" action="">
                        <input onChange={e => this.state.register.name = e.target.value} placeholder="Nome" type="text"/>
                        <input onChange={e => this.state.register.email = e.target.value} placeholder="E-mail" type="text"/>
                        <input onChange={e => this.state.register.password = e.target.value} placeholder="Senha" type="password"/>
                        <div  >
                          <button onClick={this.handleSubmit}>Cadastrar</button>  
                        </div>    
                    </form>
                </div>
            </div>
        )
    }
}

