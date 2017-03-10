import React, { Component } from 'react';
import CV from './cv';

class App extends Component {

    render() {
	return(
	    <CV {...this.props}/>
	);
    }

};

App.defaultProps = {
    name:"Thomas Rolfsnes",
    email:"mail@thomasrolfsnes.com",
    phone:"47275547",
    address:"Erlends Vei 42, 0669 Oslo",
    timelineEvents:[
	{when:"2013-2017",
	 where:"UiO/Simula",
	 what:"PhD in Informatics"},
	{when:"2011-2013",
	 where:"UiO",
	 what:"M.SC in Informatics: Design Use and Interaction"},
	{what: "B.S in Cognitive Science",
	 when: "2008-2011",
	 where: "UiB",
	 description: "blabla"}
    ]};


export default App;
