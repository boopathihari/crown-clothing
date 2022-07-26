import { Routes,Route } from 'react-router-dom';
import './shop.styles.scss';

import CategoriesPreview from '../../routes/categories-preview/categories-preview.context';
import Category from '../category/category.component';

const Shop = () => {
    return(
       <Routes>
        <Route index element={<CategoriesPreview/>} />
        <Route path=':category' element={<Category/>} />
       </Routes>
    )
}

export default Shop;