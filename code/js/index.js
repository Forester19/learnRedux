import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import Record from './components/record';

const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

const initialState = {
   firstName:'',
   secondName:''
};

//actions
const actionChangeFirstName ={
	type:ACTION_CHANGE_FIRST_NAME,
	payload:null
}

const actionChangeSecondName ={
	type:ACTION_CHANGE_SECOND_NAME,
	payload:null
}



const rootReducer = (state = initialState, action) => {
       return state;
};

const store = createStore(rootReducer);

console.log(store.getState());

//components
class MainComponent extends React.Component {
	render(){
		return <div>
   <h2>Credentials</h2>
   <input type='text' placeholder='First name'></input>
   <br></br>
   <input type="text" placeholder='Last name'></input>
			<p>{this.props.name}</p>
	</div>;
	}
}

ReactDOM.render( <div>
	<Header />
	<Record />
	<Footer />
</div>,
  document.getElementById('fieldToShow'),
  console.log('Finished rendering elements')
);
