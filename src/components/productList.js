import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SetProduct } from "../redux/actions/ProductActions";
import ProductComponent from './product'

export default function ProductList() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(SetProduct(response.data));
  };
  useEffect(() => {
      fetchProducts();
  }, [])
  return (<div className="ui grid container">
     <ProductComponent />
  </div>)
}
