import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Spent = () => {

    const { expenses } = useContext(AppContext)
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className="w-80 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 m-2 rounded relative" role="alert">
            <strong className="font-bold">Spent: </strong>
            <span className="block sm:inline">{totalExpenses} pkr</span>
        </div>
    )
}

export default Spent