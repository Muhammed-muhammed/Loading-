// @ts-ignore
import React, {useState, useEffect, useRef} from 'react';

const CarLoader = ({show}) => {
	// if (!show) return null;
	const [showLoading, setShowLoading] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(true);
		}, 5000);
		return () => clearTimeout(timer);
	}, []);
	return (
		(show) &&
		<div style={{display:'flex',flexDirection:'column'}} className="overlay">
			<div className="carLoading">
				<img className="dash dos" src="./images/i.png" alt="<o=o>"/>
				<img className="dash tres" src="./images/i.png" alt="<o=o>"/>
				<img className="dash cuatro" src="./images/i.png" alt="<o=o>"/>

			</div>
			<span className="waitMessage" >لطفا صبر کنید . . . </span>
		</div>

	);
};
export default CarLoader;