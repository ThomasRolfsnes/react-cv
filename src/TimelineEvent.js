import React from 'react';

const TimelineEvent = (props) => {
    var marker = {
	width: '16px',
	height: '16px',
	borderRadius: '50%',
	border: '2px solid #F5F7FA',
	background: '#4FC1E9',
	marginTop: '10px',
	zIndex: '9999'
    };
    var timelineBlock = {
	display: 'flex',
	width: 'calc(50% + 8px)',
	justifyContent: 'space-between',
	clear: 'both'
    };
    var timelineBlockLeft = {
	float: 'left',
	direction: 'rtl'
    };
    var timelineBlockRight = {
	float: 'right'
    };
    var timelineContent = {
	width: '95%',
	padding: '0 15px',
	color: '#666'
    };

    const direction = (dir) => {
	if(dir == 'left') {
	    return(timelineBlockLeft);
	}  else {
	    return(timelineBlockRight);
	}
    };
	

    return(
	<div style={{...timelineBlock,...direction(props.direction)}} >
	  <div style={marker}></div>
	  <div style={timelineContent}>
	    <div>{ props.when }</div>
	    <div>{ props.what }</div>
	    <div>{ props.where }</div>
	    <div>{ props.description }</div>
	  </div>
	</div>
    );
};

export default TimelineEvent;
