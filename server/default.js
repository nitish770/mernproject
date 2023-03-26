import { products } from "./constants/data.js";
import Product from "./moduls/product-schema.js";



const DefaultData = async() =>{
    try{
        
        await Product.insertMany(products);
        console.log('Data importd cloudatls Successfully');
    } catch (error) {
        console.log('Error while inserting default data', error.message);
    }
}

export default DefaultData;