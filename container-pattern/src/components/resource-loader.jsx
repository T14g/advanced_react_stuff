import React, { useEffect, useState } from "react";
import axios from 'axios'

export function ResourceLoader({ resourceUrl, resourceName, children }) {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl);
            setResource(response.data);
        })();
    }, []);

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