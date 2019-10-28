import React from 'react';

// this is going to setup the provide and consumer
const todoListContext = React.createContext();

export const Provider = todoListContext.Provider;
export const Consumer = todoListContext.Consumer;