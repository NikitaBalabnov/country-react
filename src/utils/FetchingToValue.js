export default function FetchingToValue(callback, setValue){
    const response = callback;
    response.then(
      ({data}) => setValue(data)
    );
    return response;
  }