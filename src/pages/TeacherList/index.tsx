import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
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
            </main>
        </div>
    );
}

export default TeacherList;