import React from 'react';
import {Route} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Header from './Header/Header'
import Main from './Main/Main'
import Train from './Train/Train'
import OneFot from './OneFot/OneFot'
import Development from './Development/Development'
import Predict from './Predict/Predict'


class App extends React.Component {

   state = {
     hasError: false
   }

  componentDidCatch(){
     this.setState({hasError: true});
  }

  render(){
    if (this.state.hasError){
      return(
        <div>
          <p>Произошла ошибка</p>
        </div>
      );
    } else{
      return (
        <Layout>
          <Header />
          <Route path = "/" exact component = {Main}/>
          <Route path = "/train" exact component = {Train}/>
          <Route path = "/results" exact component = {Development}/>
          <Route path = "/models" exact component = {Development}/>
          <Route path = "/guide" exact component = {Development}/>
          <Route path = '/onehot' exact component = {OneFot}/>
          <Route path = "/predict" exact component = {Predict}/>
        </Layout>
      );
    }
  }
}

export default App;
