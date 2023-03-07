const Base_Url = 'https://restcountries.com/v2';

export const All_Url = Base_Url + '/all?fields=name,flags,capital,population,region';

export function Name_Url(name){
    const nameUrl = Base_Url + '/name/' + name; 
    return nameUrl; 
}
export function Code_Url(codes){
    const nameUrl = Base_Url + '/alpha?codes=' + codes.join(','); 
    return nameUrl; 
}