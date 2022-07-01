import React, { useState } from "react";
import Akitu from "../../img/akitu-kart.png";

const TrafficLight = () => {
	const [color, setColor] = useState("");

	const redHandler = () => {
		setColor("red");
	};
	const yellowHandler = () => {
		setColor("yellow");
	};
	const greenHandler = () => {
		setColor("green");
	};

	return (
		<>
		<div className="top"></div>
		<div className="semaphore">
			<div onClick={redHandler} className={"light red" + (color === "red" ? " shine1": "")}></div>
			<div onClick={yellowHandler} className={"light yellow" + (color === "yellow" ? " shine2": "")}></div>
			<div onClick={greenHandler} className={"light green" + (color === "green" ? " shine3": "")}></div>
		</div>
		<img className="img" src={Akitu} />
		</>
	);
};

export default TrafficLight;
