import React, { useEffect } from 'react';
import axios from "axios"
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector  } from 'react-redux';
import { SelectedProduct } from '../redux/actions/ProductActions';


export default function ProductDetail() {
  const {productId}=useParams()
  const dispatch = useDispatch()
  let product = useSelector((state)=>state.product)
  const {image,title,price,category,description} = product
  const fetchProductDetail= async(id)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    .catch((err)=>{
      console.log(err)
    })
    dispatch(SelectedProduct(response.data))
  }
  useEffect(()=>{
    if (productId && productId !=="")fetchProductDetail(productId)
  }, [productId])
  
  return (
    <div className ="ui grid container">
      {product && Object.keys(product).length === 0 ?(<div> loading... </div>):
      (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
          <div className="ui vertical devider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image}alt="" />
            </div>
            <div className="column lp"> 
            <h1> {title}</h1>
            <h2>
              <a className="ui teal tag label">${price}  </a>
            </h2>
            <h3 className="ui brown block header"> {category} </h3>
            <p>{description}</p>
            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div classNam="visible content">Add to Cardt </div>
            </div>
            </div>

          </div>
          </div>

        </div>

      )}
    
    </div>
  );
}
