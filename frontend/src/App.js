import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserList from './components/Users.js'
import axios from 'axios'
//import Footer from './components/Footer';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';

class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'users': []
       }
   }

   componentDidMount() {
       axios.get('http://127.0.0.1:8000/api/users/')
       .then(response => {
           const users = response.data
               this.setState(
               {
                   'users': users
               }
           )
       }).catch(error => console.log(error))
   }

   render () {
       return (
       <Fragment>

    <Header />
//    <Container>
        <Row noGutters >
      <UserList users={this.state.users} />
      </Row>

    </Container>

        <Container>
        <Row noGutters >
      Footer
      </Row>

    </Container>
    </Fragment>
//           <div>
//               <UserList users={this.state.users} />
//           </div>
       )
   }
}

export default App;
