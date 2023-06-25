import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import QuizIcon from '@mui/icons-material/Quiz';
import { NavigationItem } from './components/NavigationItem';

const links = [
    {
        id: 1,
        title: 'Assets',
        path: '/assets',
        icon: <SettingsIcon />,
    },
    {
        id: 2,
        title: 'Users',
        path: '/users',
        icon: <PeopleIcon />,
    },
    {
        id: 3,
        title: 'Notification',
        path: '/notification',
        icon: <CircleNotificationsIcon />,
    },
    {
        id: 4,
        title: 'FAQ',
        path: '/faq',
        icon: <QuizIcon />,
    },
];

export const Navigation = () => (
    <ul>
        {links.map(link => (
           <NavigationItem item={link} key={link.id} />
        ))}
    </ul>
);
