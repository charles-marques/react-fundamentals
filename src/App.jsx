import './App.css'
import React from "react";
import Primeiro from './components/Primeiro'
import PrimeiroFragmento from './components/PrimeiroFragmento';
import PrimeiroArrow from './components/PrimeiroArrow';
import ComParametro from './components/ComParametro';
import CompFilhos from './components/CompFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/layout/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default (props) => (
    <div className="App">
        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero={12}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional v1">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao/>
        </Card>
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