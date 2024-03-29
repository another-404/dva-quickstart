import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
const Products = ({ dispatch, products }) => {
    console.log(products)
    function handleDelete(key) {
        dispatch({
            type: 'products/delete',
            payload: key
        })
    }
    return (
        <div>
            <h2>List of Products</h2>
            <ProductList onDelete={handleDelete} products={products} />
        </div>
    )
}
export default connect(({ products }) => ({
    products
}))(Products);