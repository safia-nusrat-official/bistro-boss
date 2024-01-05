import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../main'

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        api.get("/menu")
        .then(data=>{
            setMenu(data.data)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    }, [])

  return [menu, loading]
}

export default useMenu