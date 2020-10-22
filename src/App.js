import React, { useState } from 'react'

import categories from './data/categories.json'
import dataUtils from './utils/data'

import Item from './components/item'
import Path from './components/path'

import './App.css'

const categoriesHierarchy = dataUtils.convertCategoriesToHierarchy(categories)

const renderItemWithChildren = handleOnClick => (item) => (
  <div className="children" key={item.id}>
    <Item text={`${item.text} ${item.children.length > 0 ? '▶' : ''}`} onClick={handleOnClick(item.id)} />
    {
      item.children.length > 0 &&
      item.children.map(renderItemWithChildren(handleOnClick))
    }
  </div>
)

const App = () => {
  const [selectedPath, setSelectedPath] = useState(null)

  const handleOnClick = categories => (id) => () => {
    setSelectedPath(dataUtils.getPathById(id, categories))
  }

  return (
    <div className="App">
      <Path text={selectedPath} />
      <div className="items">
        {
          categoriesHierarchy.map(renderItemWithChildren(handleOnClick(categories)))
        }
      </div>
    </div>
  )
}

export default App
