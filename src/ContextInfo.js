import React from 'react'

const InfoContext = React.createContext({});

export const InfoProvider = InfoContext.Provider;
export const InfoConsumer = InfoContext.Consumer;

export default InfoContext;