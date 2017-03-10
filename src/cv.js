import React from 'react';
import CVHeader from './CVHeader';
import TimelineEvent from './TimelineEvent';

const CV = (props) => {
    var verticalLine = {
	content: '',
	position: 'absolute',
	top: 0,
	left: '50%',
	marginLeft: '-1px',
	width: '2px',
	height: '100%',
	background: '#CCD1D9',
	zIndex: 1
    };
    var timeLineContainer = {
	width: '80%',
	padding: '50px 0',
	margin: '50px auto',
	position: 'relative',
	overflow: 'hidden'
    };
    return(
	<div>
	  <CVHeader name={ props.name }
		    email={ props.email }
		    phone={ props.phone }
		    address={ props.address }
		    />
	  <div style={verticalLine}></div>
	  <div style={timeLineContainer}>
	    {props.timelineEvents.map((event,i) => {
		var dir = (i%2 == 0 ? 'left' : 'right');
		return(<TimelineEvent key={i} direction={dir} {...event}/>);
	    }
				     )}
	</div>
	    </div>
    );
};

export default CV;
