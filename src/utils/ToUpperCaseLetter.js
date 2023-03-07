export default function ToUpperCaseLetter(word){
    const w = word;
    const splited = w.split("");
    const first  = splited[0].toUpperCase();
    const rest = [...splited];
    rest.splice(0,1);
    const result = [first,...rest].join('');
    return result;
}