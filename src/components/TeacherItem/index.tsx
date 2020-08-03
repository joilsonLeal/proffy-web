import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9BV5fR4YkvtwUWLHtaJydSh-Kn4o9fy8xZw&usqp=CAU" alt="Albert Einstein"/>
                <div>
                    <strong>Albert Einstein</strong>
                    <span>Física</span>
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
