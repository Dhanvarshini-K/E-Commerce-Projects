import { Client , Account, Databases,Storage, ID} from "appwrite";

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '659681cecf0db22a1c3e'
const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export default client;


//   try {
//     for(const product in data_product){
//         await databases.createDocument('659681feb0c97e65e766','',data_product[product].id.toString(),{
//             id: data_product[product].id,
//             image: data_product[product].image,
//             DiscountTitle: data_product[product].discount_title,
//             DiscountPercent: data_product[product].discount_percent,
//             ProductReviews: data_product[product].product_reviews,
//             ProductTitle: data_product[product].product_title,
//             Actualprice: data_product[product].actual_price,
//             category:data_product[product].category,
//     });
//     } 
//   } catch (error) {
    
//   }