import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader';

import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {

    const [scheduleItems, setScheduleItems ] = useState( [
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])

    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que voçe quer dar aulas."
                descritpion="O primeiro passo é preencher esse formúlario de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatssAPP" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciencias', label: 'Ciencias' },
                            { value: 'Educacao Fisicao', label: 'Educacao Fisicao' },
                            { value: 'Fisica', label: 'Fisica' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Historia', label: 'Historia' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Portugues', label: 'Portugues' },
                            { value: 'Quimica', label: 'Quimica' }
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>Horarios Disponiveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo Horario
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da semana"
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-feira' },
                                        { value: '2', label: 'Terca-feira' },
                                        { value: '3', label: 'Quarta-feria' },
                                        { value: '4', label: 'Quinta-feira' },
                                        { value: '5', label: 'Sexta-feira' },
                                        { value: '6', label: 'Sabado' },
                                    ]}
                                />

                                <Input name="from" label="Das" type="time"></Input>
                                <Input name="to" label="Até" type="time"></Input>
                            </div>
                        )
                    })}


                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante" />
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