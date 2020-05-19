import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import SectionHeader from "./SectionHeader";

const Store = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3020/api/products")
        .then(response => response.json())
        .then(products => {
            // setPage(page[0]);
            const slice = products.slice(0,30);
                const productsData = slice.map(product => (
                    <div className="products" key={product.id}>
                
                        <Link to={`/product/${product.id}`}> 
                        <div className="product-img" > <img src={product.image} alt={product.title} width="200" height="200" /></div>
                        </Link>
                        
                        {/* <h3>{product.title}</h3> */}
                    </div>
                )
            )
            setProducts(productsData);
        });
    }, []);


    return (
       
        <div>
            <div ><img className="sectionheader" src="media/geometric.png" alt='blue, gray, and white lines'/>
            <h1 className="section-title">Shop Here</h1>
        </div> 

            {/* need to style image size  and create sections */}
            <div className="product-tile">

                    {products}
            </div>

        </div>
                
        
    ) 
    

}



export default Store;