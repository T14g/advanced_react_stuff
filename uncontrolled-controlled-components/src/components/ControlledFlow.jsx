import React from "react";

export const ControlledFlow = ({ children, onDone, goNext, currentStepIndex }) => {
    const currentChild = React.Children.toArray(children)[currentStepIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goNext, currentStepIndex });
    }

    return currentChild;
};
