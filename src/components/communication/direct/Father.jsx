import React from 'react'
import Son from './Son'

export default props =>
    <div>
        <Son {...props}><strong>João</strong></Son>
        <Son lastname={props.lastname}>Maria</Son>
        <Son lastname="Silva">Pedro</Son>
    </div>