import React from 'react';
import './App.css';
import Mercurio from './components/Mercurio';
import Venus from './components/Venus';
import Terra from './components/Terra';
import Marte from './components/Marte';
import Jupiter from './components/Jupiter';
import Saturno from './components/Saturno';
import Urano from './components/Urano';
import Netuno from './components/Netuno';

const Content = () => {
  return(
    <main>
      <h1 className='mainTitle'>Sistema solar</h1>
      <hr></hr>
      <Mercurio name='Mercúrio' description='Mercúrio é o primeiro planeta do sistema solar, a contar a partir da proximidade com o Sol, distando-se em apenas 57,9 milhões de quilômetros da estrela em média.' link='Ver mais'/>

      <Venus name='Vênus' description='Vênus é um planeta do sistema solar, localiza-se no segundo lugar a partir do sol, além disso, é o sexto maior entre todos os outros planetas.' link='Ver mais'/>

      <Terra name='Terra' description='Nosso planeta é um dos oito que estão no Sistema Solar orbitando em torno de uma estrela central: o Sol. Essa órbita permite o desenvolvimento da vida devido à temperatura que chega até nós, o que chamamos de radiação solar.' link='Ver mais'/>

      <Marte name='Marte' description='Conforme a União Astronômica Internacional (AIU), órgão responsável pela classificação dos corpos celestes, o sistema solar é composto por oito planetas: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno. Esses planetas apresentam algumas características em comum, no entanto, cada um possui peculiaridades.' link='Ver mais'/>

      <Jupiter name='Júpiter' description='Quinto planeta a partir do Sol, situado entre Marte e Saturno, Júpiter é o maior planeta do sistema solar, com diâmetro de 142.984 quilômetros – caberiam mil planetas como a Terra em Júpiter. Sua atmosfera é composta principalmente de hidrogênio e hélio.' link='ver mais'/>

      <Saturno name='Saturno' description='Saturno é o sexto planeta do Sistema Solar — contando-se a partir da distância do sol —, sendo mais conhecido pelos anéis que o circundam. Trata-se do segundo maior planeta desse sistema, atrás apenas de Júpiter, apresentando um diâmetro de 120 536 km, que é cerca de nove vezes maior que o diâmetro equatorial terrestre.' link='Ver mais'/>

      <Urano name='Urano' descriptio='Urano é um dos quatro planetas gasosos do Sistema Solar. Ele é o terceiro maior planeta desse sistema e apresenta uma composição de gases como o hidrogênio e o hélio.' link='Ver mais'/>

    <Netuno name='Netuno' description='O planeta Netuno é um dos oito planetas que compõem o Sistema Solar. Ele é classificado como planeta gasoso em razão da sua composição atmosférica formada basicamente por gases. Há em Netuno 14 satélites naturais, ou seja, luas, que o orbitam. Além das luas, há cinco grandes anéis no referido planeta. Pelo fato de Netuno ser o planeta mais distante do Sol, apresenta grande distância com relação aos corpos celestes mais estudados pela ciência.' link='Ver mais'/>
    </main>
  )
}

export default Content