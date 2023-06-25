import React from 'react';
import classNames from 'classnames';
import { useCollapseContext } from '../../context/CollapseContext';
import { Navigation } from '../Navigation';
import { UserInfo } from '../UserInfo';
import { Logo } from '../Logo';
import { CollapseButton } from '../CollapseButton';

import styles from './styles.module.css';

export const SidePanel = () => {
    const collapsed = useCollapseContext();

    return (
        <div className={classNames(styles.wrapper, {
            [styles.wrapperCollapsed]: collapsed
        })}>
            <Logo />
            <div className={styles.container}>
                <UserInfo minimised={collapsed} />
                <Navigation />
                <div className={styles.collapseButton}>
                    <CollapseButton />
                </div>
            </div>
        </div>
    );
};
