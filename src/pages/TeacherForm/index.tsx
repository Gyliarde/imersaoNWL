import React, { useState, FormEvent, InputHTMLAttributes } from 'react'
import PageHeader from '../../components/PageHeader';

import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])

    }

    function setScheduleItemValue ( position: number, field: string, value : string ) {
        const updatedScheduleItems = scheduleItems.map( (scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]:value }
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule : scheduleItems
        }).then( () => {
            alert('Cadastro realizado com Sucesso'!)
        }).catch( () => {
            alert('Erro no cadastro!')
        })

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            scheduleItems
        })
    }

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que voçe quer dar aulas."
                descritpion="O primeiro passo é preencher esse formúlario de inscrição"
            />

            <main>
                <form  onSubmit={handleCreateClass}  >
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name="name"
                            label="Nome Completo"
                            value={name}
                            onChange={ ( e ) => {
                                const target = e.target as HTMLInputElement;    
                                setName(target.value) 
                            
                            }}
                        />

                        <Input name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e ) => { 
                                const target = e.target as HTMLInputElement;   
                                setAvatar(target.value ) 
                            }}
                        />

                        <Input name="whatsapp"
                            label="WhatssAPP"
                            value={whatsapp}
                            onChange={(e ) => { 
                                const target = e.target as HTMLInputElement;  
                                setWhatsapp(target.value) 
                            }}
                        />

                        <Textarea name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { 
                                setBio(e.target.value) 
                            }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
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
                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => { 
                                const target = e.target as HTMLInputElement;  
                                setCost(target.value) 
                            }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Horarios Disponiveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horario
                        </button>
                        </legend>

                        {scheduleItems.map( (scheduleItem,index ) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        onChange= {e => setScheduleItemValue(index,'week_day',e.target.value) }
                                        value={scheduleItem.week_day}
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

                                    <Input 
                                      name="from" 
                                      label="Das" 
                                      type="time"
                                      value={scheduleItem.from}
                                      onChange= { (e) => {
                                        const target = e.target as HTMLInputElement;  
                                        setScheduleItemValue(index,'from',target.value) }} 
                                    />
                                
                                    
                                    <Input 
                                       name="to" 
                                       label="Até" 
                                       type="time"
                                       value={scheduleItem.to}
                                       onChange= { e => {
                                           const target = e.target as HTMLInputElement;  
                                           setScheduleItemValue(index,'to',target.value)
                                       }}
                                    />
                                   
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
                        <button type='submit'>
                            Salvar Cadastro
                      </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;