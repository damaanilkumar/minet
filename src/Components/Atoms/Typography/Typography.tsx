/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react'
import './Typography.css'
type typo = {
        variant:string,
        content:string,
        styles?:React.CSSProperties
}
export default function Typography({variant,content,styles}:typo){
    return (
        <div className={variant} style={styles}>{content} </div>
    )}
