import React, { useEffect, useState } from "react";

function DataSource({ getData = () => { }, resourceName, children }) {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await getData();
            setResource(response);
        })();
    }, [getData]);

    return <>
        {React.Children.map(children, (child) => {
            // If child is a valid React element, clone it and pass the user as a prop
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { [resourceName]: resource });
            }
            return child; // If child is not a valid React element, return it as is
        })}
    </>
}

export default DataSource;