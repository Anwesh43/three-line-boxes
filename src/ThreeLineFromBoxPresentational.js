import React from 'react'
import {useStyle} from './hooks'

const CurrDiv = ({style}) => {
    return <div style = {style}>
    </div>
}

const Line = ({getLineStyle, i}) => {
    return <CurrDiv style = {getLineStyle(i)}></CurrDiv>
}

const FixedBox = ({getBoxStyle}) => {
    return <CurrDiv style = {getBoxStyle()}></CurrDiv>
}

const DynamicBox = ({getDynamicStyle}) => {
    return <CurrDiv style = {getDynamicStyle()}></CurrDiv>
}

const ThreeLineFromBoxPresentational = ({w, h, scale, onClick}) => {
    const {getBoxStyle, getDynamicStyle, getLineStyle} = useStyle(w, h, scale)
    return <div>
        <FixedBox getBoxStyle = {getBoxStyle}/>
        {[0, 1, 2].map(i => <Line key = {`line_${i}`} getLineStyle = {getLineStyle} i = {i}/>)}
        <DynamicBox getDynamicStyle = {getDynamicStyle}/>

    </div>
}

export default ThreeLineFromBoxPresentational
