import React, { useState } from "react";
import linkedinIcon from '../images/linkedin.png';
import lattesIcon from '../images/lattes.png';
import '../styles/Styles.css';

const Home = () => {
    const [activeTab, setActiveTab] = useState("inicial");

    return (
        <div className="container mt-4">
            <header className="text-center mb-4">
                <h1>Thiago Andrade da Silva</h1>
            </header>

            <nav className="nav justify-content-center mb-4">
                <button
                    className={`nav-link ${activeTab === "inicial" ? "active" : ""}`}
                    onClick={() => setActiveTab("inicial")}
                >
                    Início
                </button>
                <button
                    className={`nav-link ${activeTab === "disciplinas" ? "active" : ""}`}
                    onClick={() => setActiveTab("disciplinas")}
                >
                    Disciplinas
                </button>
                <button
                    className={`nav-link ${activeTab === "sistemas" ? "active" : ""}`}
                    onClick={() => setActiveTab("sistemas")}
                >
                    Sistemas para Aquicultura
                </button>
                <button
                    className={`nav-link ${activeTab === "publicacoes" ? "active" : ""}`}
                    onClick={() => setActiveTab("publicacoes")}
                >
                    Publicações
                </button>
            </nav>


            <section>
                {activeTab === "disciplinas" && (
                    <div>
                        <h2>Disciplinas</h2>
                        <p>Descrição das disciplinas ministradas e materiais acadêmicos.</p>
                    </div>
                )}

                {activeTab === "sistemas" && (
                    <div>
                        <h2>Sistemas para Aquicultura</h2>
                        <p>Desenvolvimento de sistemas e tecnologias para aquicultura.</p>
                    </div>
                )}

                {activeTab === "publicacoes" && (
                    <div>
                        <h2>Publicações</h2>
                        <ul>
                            <li>
                                <a href="https://aquiculturanoceara.blogspot.com/" target="_blank" rel="noopener noreferrer">
                                    Blog Aquicultura no Ceará
                                </a>
                            </li>
                            <li>
                                <a href="https://revistas.uece.br/index.php/cienciaanimal/article/view/9355" target="_blank" rel="noopener noreferrer">
                                    Comparação do Efeito do Exsudato da Raiz de Alface e da Hortelã Vergamota sobre o Desenvolvimento de Tilápia do Nilo e População de Parasitas em Sistema de Aquaponia - Artigo Revista Ciência Animal
                                </a>
                            </li>
                            <li>
                                <a href="http://www.repositorio.ufc.br/handle/riufc/50351" target="_blank" rel="noopener noreferrer">
                                    <span>Efeito do Exsudado da Raiz de Hortelã Vergamota (<i>Mentha</i> X <i>piperita</i> var <i>citrata</i>) sobre Monogenoides em Tilápias do Nilo (<i>Oreochromis niloticus</i>) Criadas em Sistema de Aquaponia - Dissertação de Mestrado</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.aquaculturebrasil.com/artigo/80/a-matematica-da-aquicultura:-otimizando-a-producao-aquicola-com-auxilio-de-modelos-matematicos" target="_blank" rel="noopener noreferrer">
                                    A Matemática da Aquicultura: Otimizando a Produção Aquícola com Auxílio de Modelos Matemáticos - Revista Aquaculture Brasil
                                </a>
                            </li>
                        </ul>
                    </div>
                )}

                {activeTab === "inicial" && (
                    <div>
                        <h2>Redes e Informações</h2>
                        <ul>
                            <li>
                                <a href="http://lattes.cnpq.br/0867464831177008" target="_blank" rel="noopener noreferrer">
                                    <img src={lattesIcon} alt="Lattes" width="20" /> Lattes
                                </a>
                            </li>
                            <li>
                                <a href="https://orcid.org/0000-0002-9637-7640" target="_blank" rel="noopener noreferrer">
                                    <img src="https://buscatextual.cnpq.br/buscatextual/images/v2/icone_orcid.png" alt="ORCID" width="20" /> ORCID
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/thiagoandsilva" target="_blank" rel="noopener noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" width="20" /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@thiagoandsilva" target="_blank" rel="noopener noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" width="20" /> YouTube
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/thiagoandsilva/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinIcon} alt="LinkedIn" width="20" /> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                )}

            </section>
        </div>
    );
};

export default Home;
