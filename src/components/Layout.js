import React from 'react';
import '../styles/LayoutStyles.css';




class Layout extends React.Component     {
        
            state = {
                Nome: "", 
                Idade: "", 
                Profissão: "", 
                Email: ""


            }
    

            
            getValue = (event) => {

            const Nome = this.Nome.value; 
            const Idade = this.Idade.value; 
            const Profissão = this.Profissão.value; 
            const Email = this.Email.value;
            
            this.setState({ Nome: Nome, Idade: Idade, Profissão: Profissão, Email: Email }); 


        }    

        handleSubmit = (event) => { 
            event.preventDefault();
            const Nome = this.state.Nome; 
            const Idade = this.state.Idade;
            const Profissão = this.state.Profissão;
            const Email = this.state.Email;
        
            console.log("Nome enviado: ", Nome)  
            console.log("Idade enviada: ", Idade)  
            console.log("Profissão enviada: ", Profissão)  
            console.log("Email enviado: ", Email) 
             

            function valoresStorage(key, value) { 
                var values = JSON.parse(localStorage.getItem(key)); 
                if(values === null) {
                    values = []; 
                } 

                values.push(value); 
                localStorage.setItem(key, JSON.stringify(values)); //JSON.stringify é utilizado pois o LocalStorage aceita apenas Strings
                console.log(localStorage.getItem(key)); 
            }
             
            valoresStorage('Name', Nome); 
            valoresStorage('Age', Idade); 
            valoresStorage('Job', Profissão); 
            valoresStorage('E-mail', Email);
            

        }


        
        render() {
        
            console.log('State: ', this.state)

            return (
                <>
                    <form id="layoutContainer">
                            
                            <label id="labelNome">● Nome</label>
                            <input type="text" id="User" name="Nomes" ref={ (input) => this.Nome = input} onChange={this.getValue} />
                            
                            <label id="labelIdade">● Idade</label>
                            <input type="text" id="User" name="Idades"  ref={ (input) => this.Idade = input} onChange={this.getValue} />
                            
                            <label id="labelProfissão">● Profissão</label>
                            <input type="text" id="User" name="Profissões" ref={ (input) => this.Profissão = input} onChange={this.getValue}/>
                            
                            <label id="labelEmail">● Email</label>
                            <input type="email" id="User" name="Emails"  ref={ (input) => this.Email  = input} onChange={this.getValue}/>
                        
                        
                        <button id="botãoEnviar" type="submit" onClick={this.handleSubmit}>
                            Enviar
                        </button> 
                        <label type="text" id="Enviado">Formulário Enviado</label>
                    </form>           
                    <div id="fonte-icones">Ícones feitos por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>                
                </>
        );
    };  
}

export default Layout;