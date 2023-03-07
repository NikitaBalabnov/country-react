import axios from 'axios'
import { All_Url,  Name_Url} from './config';


export default class GetService{
    
  static async getAll(){
        const response = await axios.get(All_Url);
        return response;
    }
  static async getByName(name){
    const response = await axios.get(Name_Url(name));
    return response;
  } 
}