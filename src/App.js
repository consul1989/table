import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import classNames from 'classnames';
import { useCollapseContext } from './context/CollapseContext';
import { Users } from './pages/Users';
import { Mock } from './pages/Mock';
import { SidePanel } from './components/SidePanel';

import styles from './styles.module.css';

const App = () => {
    const collapsed = useCollapseContext();

    return (
        <Router>
            <SidePanel />
            <div className={classNames(styles.content, {
                [styles.contentCollapsed]: collapsed,
            })}>
                <Routes>
                    <Route path="/" element={<Mock />} />
                    <Route path="/assets" element={<Mock />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/notification" element={<Mock />} />
                    <Route path="/faq" element={<Mock />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
