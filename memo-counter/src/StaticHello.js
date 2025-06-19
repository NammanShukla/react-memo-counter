import React from "react";

const StaticHello = () => {

    console.log("StaticHello component rendered");
    return <h2>Hello</h2>
};

export default React.memo(StaticHello);