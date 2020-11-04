import React, { useContext, useState, useEffect } from 'react'; //3 hooks de estados 


//Context
import AppContext from '../../context';

//Components
import Header from '../../components/Header';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer';
import Connection from '../../components/Connection';
import Selecao from '../../components/Selecao';
import DropZone from '../../components/Upload-Shape/DropZone';
import Batata from '../../components/DE-Shape-to-post';
import ShapeCarga from '../../components/Carga-shape'

//Styles
import "./styles.css"; 

const Shape = () => {
  const [Files, setFiles] = useState([]); //lista vazia
  const {shapeReturn, setShapeReturn} = useContext(AppContext); //chamando o AppContext 

  useEffect(() => {
    console.log('contexto aqui: ', shapeReturn);
  }, [shapeReturn]);

  const listItems = shapeReturn.map(
    (value, index) =>
    <label className="fields" id={index + 1} key={index}>{value}</label>
  );

  function inputFill() { //func 
    console.log('inputFill()', shapeReturn.length);
    if (shapeReturn.length > 0){
      return (
        shapeReturn.map(
          (value, index) =>
          <label className="fields" id={index + 1} key={index}>{value}</label>
        )
      )}
    
    else {
      return (
        <> 
        </>
      )
    }
  }

  return (
    <>
      <Header />
      <Faq />
      
      <div className="main-container"> 

        <div className="shape-step3-header">
          <p>1</p>
          <span> Carregue seus arquivos SHAPEFILE para seu banco de dados POSTGRESQL com segurança.</span>
        </div>
        
        <DropZone />

        <div className="shape-step1-header">
          <p>2</p>
          <span>
          Conecte-se com o seu Banco de Dados.</span>
        </div>
        
        <Connection />

        <div className="shape-step2-header">
          <p>3</p>
          <span>Selecione a tabela do banco</span>
        </div>
        
        <Selecao>
          {inputFill()}
        </Selecao>
        

        <div className="shape-step4-header">
          <p>4</p>
          <span>Selecione os campos para a realização do de-para.</span>
        </div>
        
        <div className="shape-step4-de-para">
          <h1>DE-PARA</h1>
            
            <div className="shape-step4-selection">
              <form className="columns">
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
              </form>
              
              <form className="columns">
                
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
                <label><Batata/></label>
              </form>
            </div>
          </div>


          <ShapeCarga></ShapeCarga>

        </div>

        <Footer/>
      </>
  );
}

export default Shape;
