import React from 'react'

const useItem = (id) => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        api.get(`/menu/${id}`)
        .then(data=>{
            console.log(data)
            setItem(data.data)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    }, [])

  return [item, loading]
}

export default useItem