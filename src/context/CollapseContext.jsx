import React, { useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CollapseContext = React.createContext();
const CollapseUpdateContext = React.createContext();

export const useCollapseContext = () => {
    return useContext(CollapseContext);
};

export const useCollapseUpdateContext = () => {
    return useContext(CollapseUpdateContext);
};

export const CollapseProvider = ({ children }) => {
    const [collapsed, setCollapsed] = useLocalStorage("collapsedTable", false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <CollapseContext.Provider value={collapsed}>
            <CollapseUpdateContext.Provider value={toggle}>
                {children}
            </CollapseUpdateContext.Provider>
        </CollapseContext.Provider>
    );
};
