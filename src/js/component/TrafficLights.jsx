import React from "react";
import { Light } from "./Light.jsx";
export const TrafficLights = () => {
	return (
		<div className="all">
			<div className="padreposte">
				<div className="poste"></div>
			</div>
			<div id="trafficlights">
				<div id="container">
					<Light color="red" />
					<Light color="yellow" />
					<Light color="green" />
				</div>
			</div>
		</div>
	);
};
