import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Personuser from './Pages/Personuser';
import Professional from './Pages/Professional'


function MainRoutes() {

    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/people' element={<Personuser />} />
            <Route path='/professional' element={<Professional />} />
        </Routes>
    )
}

export default MainRoutes;