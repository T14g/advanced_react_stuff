import { useEffect, useState } from "react";

// HOC genérico para buscar e atualizar qualquer recurso
export const includeUpdatableResource = (Component, fetchResource, postResource, resourceId) => {
  return (props) => {
    const [resource, setResource] = useState(null);
    const [updatableResource, setUpdatableResource] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      fetchResource(resourceId).then((data) => {
        setResource(data);
        setUpdatableResource(data);
        setLoading(false);
      });
    }, [resourceId]);

    const resourceChangeHandler = (updates) => {
      setUpdatableResource((prev) => ({ ...prev, ...updates }));
    };

    const resourcePostHandler = async () => {
      setLoading(true);
      const updated = await postResource(resourceId, updatableResource);
      setResource(updated);
      setUpdatableResource(updated);
      setLoading(false);
    };

    const resetResourceHandler = () => {
      setUpdatableResource(resource);
    };

    return (
      <Component
        {...props}
        updatableResource={updatableResource}
        changeHandler={resourceChangeHandler}
        postHandler={resourcePostHandler}
        resetHandler={resetResourceHandler}
        loading={loading}
      />
    );
  };
};
