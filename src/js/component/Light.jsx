import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const Light = props => {
    const [encendido, setEncendido] = useState(false);
    function cambiar() {
        console.log("Voy a cambiar");
        return setEncendido(!encendido);
    }
    return (
        <div
            className={`${props.color} lamp ${encendido ? "sombra" : ""}`}
            onClick={cambiar}></div>
    );
};

Light.propTypes = {
    color: PropTypes.string
};
