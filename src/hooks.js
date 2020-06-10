import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useAnimated(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w,
        h
    }
}

export const useStyle = (w, h, scale) => {
    const position = 'absolute'
    const fixedY = h / 2
    const boxSize = Math.min(w, h) / 6
    const fixedX = w / 2
    const x = fixedX - boxSize / 2
    const y = fixedY - boxSize / 2
    const fixedColor = '#9E9E9E'
    const lineWidth = boxSize / 15
    const parts = 3
    const color = '#4CAF50'
    return {
        getBoxStyle() {
            const left = `${x}px`
            const top = `${y}px`
            const width = `${boxSize}px`
            const height = `${boxSize}px`
            const background = fixedColor
            return {position, left, top, width, height, background}
        },

        getLineStyle(i) {
            const sfi = divideScale(sf, i, parts)
            const gap = (boxSize - lineWidth) / (parts - 1)
            const left = `${x + gap * i}px`
            const top = `${y * (1 - sfi)}px`
            const width = `${lineWidth}px`
            const height = `${y * sfi}px`
            const background = color
            return {position, }
        },

        getDynamicStyle() {
            const boxDynamicSize = `${boxSize * sf}px`
            const left = `${x - boxDynamicSize / 2}px`
            const top = `${y - boxDynamicSize / 2}px`
            const width = `${boxDynamicSize}px`
            const height = `${boxDynamicSize}px`
            const background = color
            return {position, left, top, width, height, background}
        }
    }
}
