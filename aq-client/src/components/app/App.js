import {Routes, Route} from 'react-router-dom';

import Layout from '../../pages/Layout/Layout';
import Home from '../../pages/Home/Home';

import './App.sass';

function App() {
    return(
        <Routes>
            <Route path='/' element={<Layout></Layout>}>
                <Route index element={<Home></Home>}></Route>
            </Route>
        </Routes>
    )
}

export default App;
