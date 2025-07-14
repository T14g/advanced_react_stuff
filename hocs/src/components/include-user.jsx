import React, { useEffect, useState } from "react";

// HOC que inclui o usuário via mock de API
export const includeUser = (Component, id) => {
    return (props) => {
        const [user, setUser] = useState(null);
        console.log(id)

        useEffect(() => {
            // Futuramente buscará por id específico
            console.log('ID recebido pelo HOC:', id);
            setTimeout(() => {
                setUser({
                    id,
                    name: "Sarah Waters",
                    age: 25,
                    country: "United Kingdom",
                    books: ["Fingersmith", "The Night Watch"]
                });
            }, 1000); // 1 segundo de delay
        }, [id]);

        return <Component {...props} user={user} />;
    };
};
