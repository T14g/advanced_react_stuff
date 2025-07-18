import { useEffect, useState } from "react";

export const includeUpdatableUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const [updatableUser, setUpdatableUser] = useState(null);

    useEffect(() => {
      // Mock da chamada para buscar usuário
      setTimeout(() => {
        const mockUser = {
          id: userId,
          name: "Sarah Waters",
          age: 25,
          country: "United Kingdom",
          books: ["Fingersmith", "The Night Watch"],
        };
        setUser(mockUser);
        setUpdatableUser(mockUser);
      }, 1000);
    }, [userId]);

    const userChangeHandler = (updates) => {
      setUpdatableUser({ ...updatableUser, ...updates });
    };

    const userPostHandler = async () => {
      // Mock do post do usuário
      setTimeout(() => {
        setUser(updatableUser);
        // Simula que o backend retorna o usuário atualizado
        setUpdatableUser(updatableUser);
      }, 1000);
    };

    const resetUserHandler = () => {
      setUpdatableUser(user);
    };

    return (
      <Component
        {...props}
        updatableUser={updatableUser}
        changeHandler={userChangeHandler}
        userPostHandler={userPostHandler}
        resetUserHandler={resetUserHandler}
      />
    );
  };
};
