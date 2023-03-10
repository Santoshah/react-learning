import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const abortCont = new AbortController();

        fetch(url, {signal : abortCont.signal}).then(res=>{
            if(!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            return res.json()
        }).then(data=>{
            setData(data);
            setisPending(false)
            setError(null)
        })
        .catch((e)=>{
            if(e.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setisPending(false)
                setError(e.message)
            }
        })

        return () => abortCont.abort()
    },[url])

    return {data, isPending, error}
}

export default useFetch;