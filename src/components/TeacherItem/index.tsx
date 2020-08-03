import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/33378274?s=460&u=35316d2855c783496986fce7512ad6cce75bf890&v=4" alt="Joilson Leal"/>
                <div>
                    <strong>Joilson Leal</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloremque tempora quasi tempore expedita assumenda possimus, recusandae in laudantium, facilis fuga repellat voluptas soluta earum maiores molestiae voluptatem, dolores beatae!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
