import React, { useEffect, useState } from "react";
import axios from 'axios'

export function CurrentUserLoader({children, userId}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await axios.get(`users/${userId}`);
            console.log(response)
            setUser(response.data);
        })();
    }, [userId]);

    return <>
        {React.Children.map(children, (child) => {
            // If child is a valid React element, clone it and pass the user as a prop
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { user });
            }
            return child; // If child is not a valid React element, return it as is
        })}
    </>
}