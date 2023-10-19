import React from "react";
import * as Icon from "react-icons/fa";

export default function Icons() {
    console.log(Icon);
    const handleClick = (name) => {
        navigator.clipboard.writeText(name);
    };
    return (
        <div
            style={{
                backgroundColor: "white",
                height: "auto",
                overflow: "scroll",
                paddingBottom: "100px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    fontSize: "5px",
                }}
            >
                {Object.entries(Icon).map(([name, Icon]) => (
                    <div key={name} style={{ margin: "0.5rem" }}>
                        <Icon onClick={() => handleClick(name)} />
                    </div>
                ))}
            </div>
        </div>
    );
}
