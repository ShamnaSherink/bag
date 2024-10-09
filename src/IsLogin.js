
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'

export const IsLogin = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const role = JSON.parse(localStorage.getItem('role'))
        if (role == null) {
            navigate('/login')
        }
    }, [])
}