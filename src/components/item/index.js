import React from 'react'

import './style.css'

const Item = ({ text, onClick = () => {} }) => (
  <div className="item" onClick={onClick}>{text}</div>
)

export default Item
