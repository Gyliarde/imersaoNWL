import React from 'react' 
import PageHeader from '../../components/PageHeader';

import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

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
                      <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciencias', label: 'Ciencias'},
                            {value: 'Educacao Fisicao', label: 'Educacao Fisicao'},
                            {value: 'Fisica', label: 'Fisica'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'Historia', label: 'Historia'},
                            {value: 'Matematica', label: 'Matematica'},
                            {value: 'Portugues', label: 'Portugues'},
                            {value: 'Quimica', label: 'Quimica'}
                        ]}
                        />
                      <Input name="cost" label="Custo da sua hora por aula" />
                  </fieldset>

                  <fieldset>
                      <legend>Horarios Disponiveis
                        <button type="button">
                            + Novo Horario
                        </button>
                      </legend>

                      <div className="schedule-item">
                        <Select 
                            name="subject" 
                            label="Matéria"
                            options={[
                                {value: 'Artes', label: 'Artes'},
                                {value: 'Biologia', label: 'Biologia'},
                                {value: 'Ciencias', label: 'Ciencias'},
                                {value: 'Educacao Fisicao', label: 'Educacao Fisicao'},
                                {value: 'Fisica', label: 'Fisica'},
                                {value: 'Geografia', label: 'Geografia'},
                                {value: 'Historia', label: 'Historia'},
                                {value: 'Matematica', label: 'Matematica'},
                                {value: 'Portugues', label: 'Portugues'},
                                {value: 'Quimica', label: 'Quimica'}
                            ]}
                        />

                        <Input name="from" label="Das" type="time"></Input>
                        <Input name="to" label="Até" type="time"></Input>
                      </div>
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