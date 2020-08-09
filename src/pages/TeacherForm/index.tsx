import React from 'react' 
import PageHeader from '../../components/PageHeader';

import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';

function TeacherForm () {
    return (
        <div id="page-teacher-form" className="container">
             <PageHeader  
                title="Que incrível que voçe quer dar aulas." 
                descritpion = "O primeiro passo é preencher esse formúlario de inscrição"
              />

              <main>
                  <fieldset>
                      <legend>Seus dados</legend>
                      <Input name="name" label="Nome Completo" />
                      <Input name="avatar" label="Avatar" />
                      <Input name="whatsapp" label="WhatssAPP" />
                      <Textarea  name="bio" label="Biografia" />
                  </fieldset>

                  <fieldset>
                      <legend>Sobre a aula</legend>
                      <Input name="subject" label="Matéria" />
                      <Input name="cost" label="Custo da sua hora por aula" />
                  </fieldset>

                  <footer>
                      <p>
                          <img src={warningIcon} alt="Aviso Importante"/>
                          Importante! <br />
                          Preencha todos os dados
                      </p>
                      <button type='button'>
                        Salvar Cadastro
                      </button>
                  </footer>
              </main>
       </div>
    )
}

export default TeacherForm;