import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import ThreeLineFromBoxPresentational from './ThreeLineFromBoxPresentational'

const ThreeLineFromBoxComponent = (props) => {
    const {scale, start} = useAnimatedScale(0.02, 20)
    const {w, h} = useDimension()
    return <ThreeLineFromBoxPresentational w = {w} h = {h} scale = {scale} onClick = {start}>
    </ThreeLineFromBoxPresentational>
}

export default ThreeLineFromBoxComponent
