import './App.css'
import React from "react";

import Primeiro from './components/basics/Primeiro'
import PrimeiroFragmento from './components/basics/PrimeiroFragmento';
import PrimeiroArrow from './components/basics/PrimeiroArrow';
import ComParametro from './components/basics/ComParametro';
import CompFilhos from './components/basics/CompFilhos';
import Condicional from './components/basics/Condicional';
import CondicionalComIf from './components/basics/CondicionalComIf';
import Card from './components/layout/Card';
import Repeticao from './components/layout/Repeticao';
import Father from './components/communication/direct/Father';
import Super from './components/communication/indirect/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#11 - Mega" color="#73503C" >
                <Mega qtdNumero={6}></Mega>
            </Card>
            <Card titulo="#10 - Contador" color="#293E6A">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#9C0F5F">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#000">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="lightblue">
                <Father lastname="Freitas"></Father>
            </Card>
            <Card titulo="#06 - Condicional v2" color="#FA6900">
                <CondicionalComIf numero={12}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional v1" color="#E94C6F">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="#04 - Repetição" color="#2ab7ca">
                <Repeticao/>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#fe4a49">
                <CompFilhos  >
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </CompFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parâmetro" color="#f6abb6">
                <ComParametro titulo="Este é o título" subtitulo="Este é um subtítulo"/>
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#7bc043">
                <Primeiro/>
            </Card>
        </div>
    </div>
);