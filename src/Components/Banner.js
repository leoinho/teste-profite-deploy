import React, { Component } from 'react';
import '../CSS/Banner.css';
import Imagem from '../Img/ImgBanner/Banner.png';
import Slider from "react-slick";
import Imagem2 from '../Img/ImgBanner/BannerMobi.png';


class Banner extends Component {

  render() {
    var settings = {
        dots: true,
        
      };
    return (
        <div className="container2">
            <div className="slider">
               <Slider {...settings}>
                <div className="itensBanner">
                  <div className="textoPrincipal"> 
                    <div className="alinhaTexto">
                      <p className="">
                        Nossa especialidade:<br/>experiência de compra.<span></span>
                      </p>
                    </div>
                  </div>
                  <div className="imgPrincipal">
                    <img src={Imagem}/>
                  </div>
                </div>
                <div className="itensBanner">
                  <div className="textoPrincipal"> 
                    <div className="alinhaTexto">
                      <p className="">
                        Nossa especialidade:<br/>experiência de compra.<span></span>
                      </p>
                    </div> 
                  </div>
                  <div className="imgPrincipal">
                    <img src={Imagem}/>
                  </div>
                </div>
                <div className="itensBanner">
                  <div className="textoPrincipal"> 
                    <div className="alinhaTexto">
                      <p className="">
                        Nossa especialidade:<br/>experiência de compra.<span></span>
                      </p>
                    </div>
                  </div>
                  <div className="imgPrincipal">
                    <img src={Imagem}/>
                  </div>
                </div>
                <div className="itensBanner">
                  <div className="textoPrincipal"> 
                    <div className="alinhaTexto">
                        <p className="">
                        Nossa especialidade:<br/>experiência de compra.<span></span>
                      </p>
                    </div>
                  </div>
                  <div className="imgPrincipal">
                    <img src={Imagem}/>
                  </div>
                </div>
                </Slider>
              </div>
              <div className="bannerMobi">
                <div className="slider2">
                  <Slider {...settings}>
                    <div className="itensBanner2">
                      <div className="alinhaTexto"> 
                      <p className="">
                        Nossa especialidade:<br/>experiência de compra.
                        <span></span> 
                      </p>  
                      </div> 
                      <div>
                        <img src={Imagem2}/>
                      </div>
                    </div>
                    <div className="itensBanner2">
                      <div className="alinhaTexto">
                      <p className="">
                        Nossa especialidade:<br/>experiência de compra.
                        <span></span> 
                      </p> 
                      </div> 
                      <div>
                        <img src={Imagem2}/>
                      </div>
                    </div>
                    <div className="itensBanner2">
                      <div className="alinhaTexto">
                      <p className="">
                        Nossa especialidade:<br/>experiência de compra.
                        <span></span> 
                      </p>   
                      </div> 
                      <div>
                        <img src={Imagem2}/>
                      </div>
                    </div>
                    <div className="itensBanner2">
                      <div className="alinhaTexto">
                      <p className="">
                        Nossa especialidade:<br/>experiência de compra.
                        <span></span> 
                      </p>   
                      </div> 
                      <div>
                        <img src={Imagem2}/>
                      </div>
                    </div>                 
                  </Slider>
                </div>
              </div>
        </div>
    );
  }
}

export default Banner;