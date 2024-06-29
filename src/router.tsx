import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsersPage } from './components/pages/users';
import { DetailsPage } from './components/pages/details';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<UsersPage />} />
            <Route path='/details' element={<DetailsPage />} />
        </Routes>
    </BrowserRouter>
  )
}
