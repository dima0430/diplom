/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function HeaderTopLine(){
    let history=useHistory()
    return(
        <div className="topline">
            <div href="" onClick={()=>history.push('/')} className="topline__logo">InTech</div>
            <a href="#" className="topline__link">Магазини</a>
            <a href="#" className="topline__link">Кредит</a>
            <a href="#" className="topline__link">Доставка</a>
            <a href="#" className="topline__link">Блог</a>
            <a href="#" className="topline__link">Обмін/Повернення</a>
            <a href="#" className="topline__link">Гарантія</a>
        </div>
    )
}
