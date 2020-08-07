import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/10583923?s=460&u=9b433eafe3dab97004d4a44a60b3d09d7020117c&v=4" alt="Gyli"/>
            <div>
                <strong>Gyliarde Farias</strong>
                <span>Matematica</span>
            </div>
        </header>
        <p>
            Teste sobre matematica bla
            <br/>
            Teste sobre matematica bla
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;