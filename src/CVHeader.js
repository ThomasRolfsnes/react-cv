
import React from 'react';
import CVContactInformation from './CVContactInformation';

const CVHeader = (props) => {
    var header = {
	display: 'flex',
	flexDirection: 'column'
    };
    return(
	<div style={header} >
	  <h2>
	    { props.name }
	  </h2>
	  <CVContactInformation email={ props.email }
		   phone={ props.phone }
		   address={ props.address }/>
	</div>
    );
};

export default CVHeader;
