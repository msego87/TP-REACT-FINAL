import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getProducts } from '../products';
import Product from './Product';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import './Home.css';


const Home = () => {

    const {user} = useContext(UserContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
      
        fetch("https://66950fcb4bd61d8314c9d497.mockapi.io/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))

    }, [])
       
    //let products = getProducts();
    
  return (
    <>
        <section className='container' >
            <h4 className="my-4">Vea todos los productos disponibles.</h4>
            <Row xs={1} lg={2} xl={3}  className="g-4 products-container" >
            {
                products.map((product) => (
                <Col key={product.sku}>
                    <NavLink 
                        key={Number(product.sku)}
                        to={`/product/${Number(product.sku)}`}>
                        <Product key={Number(product.sku)} {...product} />
                    </NavLink>
                </Col>  
                ))
            }
            </Row>
        </section>
    </>
  )
}

export default Home