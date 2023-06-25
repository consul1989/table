import React from 'react';
import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useCollapseContext } from '../../../../context/CollapseContext';
import { CustomLink } from '../../../CustomLink';
import { listIconStyle } from '../../styles';

export const NavigationItem = ({ item }) => {
    const collapsed = useCollapseContext();

    return (
        <li>
            <CustomLink to={item.path}>
                {collapsed
                    ? <Tooltip title={item.title} enterNextDelay={500} enterDelay={500}>
                        <IconButton sx={listIconStyle} disableRipple>
                            {item.icon}
                        </IconButton>
                    </Tooltip>
                    : item.title
                }
            </CustomLink>
        </li>
    );
};
