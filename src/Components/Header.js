import React, { Component } from 'react';
import '../CSS/Header.css';
import Logo from '../Img/ImgHeader/LogoHeader.svg';
import Lupa from '../Img/ImgHeader/LupaHeader.svg';
import Avatar from '../Img/ImgHeader/AvataHeader.svg';
import Carrinho from '../Img/ImgHeader/MinicartHeader.svg';
import Idiomas from '../Img/ImgHeader/IdiomasHeader.svg';
import MenuMobi from '../Img/ImgHeader/MenuMobiHeader.svg';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      lado: -500
    }
  }
  render() {
        const menuMobi = ()=>{        
          this.setState({ lado: -20 })     
      }
      const fechaMenu = ()=>{     
        this.setState({ lado: -500 })
    }

    return (
      <div className="container">
        <div className="header">
          <div className="menuMobi">
            <img onClick={menuMobi} src={MenuMobi}/>
          </div>
          <div 
            style={{ 
              
              position: "absolute",
              width: 220, 
              height: 1001, 
              background: "white", 
              zIndex:2,
              left: this.state.lado,
              transition: "left 1s",
              }}>
              <h3 style={{ position: "relative", left:0,top:-21, }}>Menu</h3>
              <div onClick={fechaMenu} style={{ position: "relative", left: 211,bottom:62, width:110,height:1000,zIndex:2 }}></div>
              <div className="divOpacity"></div>
            </div>
          <div className="logo">
            <img className="logoMobi" src={Logo}/>
          </div>
          <div className="busca">
            <input type="text" placeholder="O que você está procurando?"/>
            <img className="lupa" src={Lupa}/>
            
          </div>
          <div className="minhaConta">
            <span className="account">
              <img src={Avatar}/>
              Minha Conta
            </span>
            <div className="miniCart">
              <img src={Carrinho}/>
            </div>
            
            <div className="idiomas">
              <img src={Idiomas}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
