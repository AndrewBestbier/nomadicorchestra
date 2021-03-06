import React from 'react';
import 'tachyons';
import './GigDatesCard.css';

const GigDatesCard = (props) => {

	const { date, buyTickets, description, image, venue } = props;
	
	// const date = (i) => googleData[i].Date;
	// const buyTickets = (i) => googleData[i].buyTickets;
	// const description = (i) => googleData[i].Description;
	


return (
	<div className='mv3 mh1'>
	
		<div className="card  datesBackground shadow-5 hidden mv4 br4 ">
		  <h1 className="f4 bg-near-black white mv0 pv2 ph3 br4 br--top">{date} - {venue}</h1>
		  <div className=" pa3">
		  	<div className=' flex justify-center flex-wrap center'>
		  		<div className=' cardText ma3'>
			    	<p className="f6 f5-ns lh-copy measure mv0 white">{description}</p>
			    </div>
			    <div className=' cardImage ma3'>
			    	{ image.length > 0 &&
			   		 <img   alt='' src={image}/>
			   		}
		   		</div>
			</div>
		    <a className=" f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black-50 bg-animate hover-bg-near-black" 
		    	href={buyTickets} target="_blank">Buy Tickets</a>
		  </div>
		</div>

	</div>



);
}

export default GigDatesCard;

