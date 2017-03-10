import React from 'react';

const CVContactInformation = (props) => {
    var style = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around'
    };
    return(
	<div style={style}>
	  <div id="email">{ props.email }</div>
	  <div id="phone">{ props.phone }</div>
	  <div id="address">{ props.address }</div>
	</div>
    );
};

export default CVContactInformation;
