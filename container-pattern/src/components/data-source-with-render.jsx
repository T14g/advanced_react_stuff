import React, { useEffect, useState } from "react";

function DataSourceWithRender({ getData = () => { }, render }) {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await getData();
            setResource(response);
        })();
    }, [getData]);

    return render(resource);
}

export default DataSourceWithRender;