import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Contant from './component/Contant';
import Home from './component/Home';
import Info from './component/Info';
import Nav from './component/Nav';
import Tiker from './component/Tiker';

function App() {
  return (
    <div className='main' >
      <Nav />
      <Info />
      <Tiker/>
      
     
      {/* <Home/>  */}
      <Contant  img="https://img-global.cpcdn.com/recipes/08f565c41a52d4c9/1200x630cq70/photo.jpg" price="130" tittle="Chicken Chilli" />
      <Contant img="https://aroma-grill.com/wp-content/uploads/2021/06/chilli-chicken.jpg" price="120"  tittle="Chicken Kebab" />
      <Contant img="https://img-global.cpcdn.com/recipes/287b6654c04efe13/1200x630cq70/photo.jpg"  price="100"  tittle="Chicken  fried rice"/>
      <Contant img="https://www.roguechef.com/wp-content/uploads/2021/01/Gobi-Manchurian.png" price="60"  tittle="gobi manchurian" />
      <Contant img="https://www.pccmarkets.com/wp-content/uploads/2021/01/pcc-leftover-deli-roast-chicken-soup-flo.jpg"  tittle="Chicken Soup" price="60"/>
      <div className='container  '>
        <div className='row'>
          <div className='col-md-8 border-1 rounded-pill'>
             <img className='img-fluid border-1 rounded-2 '  src='https://static.vecteezy.com/ti/vecteur-libre/p1/526160-differents-types-de-fast-food-gratuit-vectoriel.jpg'/>
          </div>
          <div className='col-md-4 mt-3'>
            <h3 className='text-dark'>Talk</h3>
            <p className='lead mt-2 text-dark'>A whole set of values comes with fast food: Everything should be fast, cheap and easy; there's always more where that came from; there are no seasons; you shouldn't be paid very much for preparing food. It's uniformity and a lack of connection.</p>

          </div>
          </div>
      </div>


      

    </div>
  );
}

export default App;
