import { useState, useEffect } from "react"

const useFetchHook = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
   }, [url]);

   return [data];
}

export default useFetchHook;

/*
1) Hacer un reloj
2) Consumir una API y hace pagina.
*/