import React, { useState, useEffect } from 'react';


const ProductSingle = (props) => {
    const [product, setProduct] = useState([]);
    const {id} = props.match.params;

    useEffect(() => {
        fetch(`http://localhost:3020/api/products/${id}`)
        .then(response => response.json())
        .then(product => {
            setProduct(product);
      });
    }, [id]);

    return (
        <>
        <div>
            <div><img className="sectionheader" src="/media/geometric.png" alt='blue, gray, and white lines'/></div> 

            <h1 className="section-title">{product.title}</h1>
        </div>
        <div className="product-single">
            
            <div><img className="product-img"  src={product.image} width="300" height="300" /></div>
            <div >
                <p className="product-text">
                    price: ${product.price}
                    <span>format: {product.format}</span>
                    <span>description: {product.description}</span>
                </p>
            </div>
            {/* <p className="product-price"></p>
            <p className="product-format" ></p>
            <p className="product-des"></p> */}

            <input className="input-butn" id="butn" type="submit" value="add to cart" />
        </div>
       
        </>
    )
}

export default ProductSingle;