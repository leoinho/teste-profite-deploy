import React, { Component } from 'react';
import '../CSS/Footer.css';
import Email from '../Img/ImgFooter/Email.svg';
import Fone from '../Img/ImgFooter/Fone.svg';
import LogosFooter from '../Img/ImgFooter/LogosFooter.svg';
import LogoFooterMobi from '../Img/ImgFooter/LogosFooterMobi.svg';

class Footer extends Component {
  render() {
    return (
        <div className="container3">
            <div className="container4">
                <div className="tituloFooter">
                    <span>Localização</span>
                </div>
                <div className="informacaoFooter">
                    <div className="localizacao">
                        <div className="enderecos">
                            <div className="enderecoSaoPaulo">
                                <p className="tituloEndereco">São Paulo</p>
                                <p>
                                    Rua do Rócio, 423/1801<br/>
                                    Vila Olímpia -SP<br/>
                                    04552-000<br/>
                                    +5511 33333 3333
                                </p>
                            </div>
                            <div className="enderecoRio">
                                <p className="tituloEndereco">Rio de Janeiro</p>
                                <p>
                                    Vol. da Pátria, 301/702<br/>
                                    Botafogo-RJ<br/>
                                    22270-000<br/>
                                    +5511 33333 3333
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="contato">
                        <div className="posicaoContatos">
                            <div className="formaContatos">
                                <img src={Email}/>
                                <p>ENTRE EM CONTATO</p>
                            </div>
                            <div className="formaContatos">
                                <img src={Fone}/>
                                <p>FALE COM O NOSSO<br/>CONSULTOR ONLINE</p>
                            </div>
                        </div>
                    </div>
                    <div className="logoFooter">
                        <img src={LogosFooter}/>
                    </div>
                </div>
            </div>
            <div className="footerMobi">
                <div className="tituloFooterMobi">
                    <span><p>Localização</p></span>
                </div>
                <div className="localizacaoMobi">
                    <div className="enderecoMobi">
                        <span className="tituloLocalizaMobi">
                            São Paulo<br/>
                        </span>
                        <span>
                            Rua do Rócio, 423/1801<br/>
                            Vila Olímpia - SP<br/>
                            04552-000<br/>
                            +5511 3333 3333
                        </span>           
                    </div>
                    <div className="enderecoMobi">
                        <span className="tituloLocalizaMobi">
                            Rio de Janeiro<br/>
                        </span>
                        <span>
                            Vol. da Pátria, 301/702<br/>
                            Botafogo - RJ<br/>
                            22270-000<br/>
                            +5521 3333 3333
                        </span>  
                    </div>
                </div>
                <div className="contatoMobi">
                    <div className="formaContatoMobi">
                        <img src={Email}/>
                        <p>ENTRE EM CONTATO</p>
                    </div>
                    <div className="formaContatoMobi">
                        <img src={Fone}/>
                        <p>FALE COM O NOSSO<br/>CONSULTOR ONLINE</p>
                    </div>
                </div>
                <div className="logoFooterMobi">
                    <img src={LogoFooterMobi}/>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
