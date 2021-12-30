import './App.css'
import React from "react";
import Primeiro from './components/Primeiro'
import PrimeiroFragmento from './components/PrimeiroFragmento';
import PrimeiroArrow from './components/PrimeiroArrow';
import ComParametro from './components/ComParametro';
import CompFilhos from './components/CompFilhos';
import Card from './components/layout/Card';

export default (props) => (
    <div className="App">
        <Card titulo="#03 - Componente com Filhos">
            <CompFilhos  >
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </CompFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parâmetro">
            <ComParametro titulo="Este é o título" subtitulo="Este é um subtítulo"/>
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>
        {/* <PrimeiroArrow></PrimeiroArrow>
        
        <ComParametro titulo="Oppaaaa!" subtitulo="Eppa"/> */}
    </div>
);