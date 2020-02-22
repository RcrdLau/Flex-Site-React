import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { actions as actionsTask } from 'store/ducks/tasks'
import sobre1 from '../assets/sobre1.jpg'
import sobre2 from '../assets/sobre2.jpg'
import produtos1 from '../assets/produtos1.jpg'
import produtos2 from '../assets/produtos2.jpg'
import produtos3 from '../assets/produtos3.jpg'

const FullPage = () => {

    return (
        <>
            <div className="superinfo-bg">
                <div className="superinfo">
                    <p>Seg - Sex - 08:00 às 18:00</p>
                    <a href="tel:+5511999999999">+55 11 99999-9999</a>
                    <p>Av. Perto daí, 999, Bairro - SP</p>
                </div>
            </div>
            <header className="menu-bg">
                <div className="menu">
                    <div className="menu-logo">
                        <a href="#" alt="Flex site link">Flex Site</a>
                    </div>
                    <nav className="menu-nav">
                        <ul>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#produtos">Produtos</a></li>
                            <li><a href="#preço">Preço</a></li>
                            <li><a href="#qualidade">Qualidade</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <h1 className="introducao">Novos valores e<br/>Propriedades de CSS</h1>

            <section className="sobre" id="sobre">
                <div className="sobre-info">
                    <h1>Sobre</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prinrelease of publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="sobre-img">
                    <img src={sobre1} alt="Sobre 1" />
                </div>
                <div className="sobre-img">
                    <img src={sobre2} alt="Sobre 2" />
                </div>
            </section>

            <section className="produtos" id="produtos">
                <h1>Produtos</h1>
                <div className="produtos-container">
                    <div className="produtos-item purple">
                        <h2>Purple</h2>
                        <img src={produtos1} alt="Produtos 1" />
                    </div>
                    <div className="produtos-item pink">
                        <h2>Pink</h2>
                        <img src={produtos2} alt="Produtos 2" />
                    </div>
                    <div className="produtos-item blue">
                        <h2>Blue</h2>
                        <img src={produtos3} alt="Produtos 3" />
                    </div>
                </div>
            </section>

            <section className="preco" id="preco">
                <div className="preco-item">
                    <h2>Cobre</h2>
                    <span><sup>R$</sup>19</span>
                    <ul>
                        <li>Planos Ilimitados</li>
                        <li>Acesso Restrito</li>
                        <li>Conteudo Secreto</li>
                        <li>Suporte 24h</li>
                    </ul>
                    <a href="#">Comprar</a>
                </div>
                <div className="preco-item">
                    <h2>Prata</h2>
                    <span><sup>R$</sup>39</span>
                    <ul>
                        <li>Planos Ilimitados</li>
                        <li>Acesso Restrito</li>
                        <li>Conteudo Secreto</li>
                        <li>Suporte 24h</li>
                        <li>Compra exclusiva</li>
                    </ul>
                    <a href="#">Comprar</a>
                </div>
                <div className="preco-item">
                    <h2>Ouro</h2>
                    <span><sup>R$</sup>79</span>
                    <ul>
                        <li>Planos Ilimitados</li>
                        <li>Acesso Restrito</li>
                        <li>Conteudo Secreto</li>
                        <li>Suporte 24h</li>
                        <li>Compra exclusiva</li>
                        <li>Download dos itens</li>
                    </ul>
                    <a href="#">Comprar</a>
                </div>
            </section>

            <section className="qualidade" id="qualidade">
                <div className="qualidade-item">
                    <h2>Inteligente</h2>
                    <p>textinho</p>
                </div>
                <div className="qualidade-item">
                    <h2>Compacto</h2>
                    <p>textinho</p>
                </div>
                <div className="qualidade-item">
                    <h2>Economico</h2>
                    <p>textinho</p>
                </div>
                <div className="qualidade-item">
                    <h2>Transparente</h2>
                    <p>textinho</p>
                </div>
                <div className="qualidade-item">
                    <h2>Sustentavel</h2>
                    <p>textinho</p>
                </div>
                <div className="qualidade-item">
                    <h2>Opaco</h2>
                    <p>textinho</p>
                </div>

            </section>

            <section className="newsletter">
                <div className="newsletter-info">
                    <h1>Newsletter</h1>
                    <p>assine e fique por dentro das novidades</p>
                </div>
                <form className="newsletter-form">
                    <input type="text" placeholder="Seu e-mail"/>
                    <button type="submit">Assinar</button>
                </form>
            </section>
            <footer className="footer">
                <p>FlexSite Todos os direitos reservados</p>
            </footer>
        </>
    )

}
export default FullPage