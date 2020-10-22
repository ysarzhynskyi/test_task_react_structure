const getRootItem = (rootItems = [], currentItem) => !currentItem.parent_id ? [ ...rootItems, currentItem ] : rootItems

const getChildItem = (categoryId) => (childItems = [], currentItem) =>
  currentItem.parent_id === categoryId ? [ ...childItems, currentItem ] : childItems

const getItemWithChildren = categories => (currentItem) => ({
  ...currentItem,
    children: categories.reduce(getChildItem(currentItem.id), []).map(getItemWithChildren(categories)),
})

const convertCategoriesToHierarchy = (categories = []) => {
  const rootItems = categories.reduce(getRootItem, [])

  const itemsHierarchy = rootItems.map(getItemWithChildren(categories))

  return itemsHierarchy
}

const getItemWithParent = (currentItemId, categories = []) => {
  const currentItem = categories.find(item => item.id === currentItemId)

  if (!currentItem) {
    return null
  }

  const parentItem = currentItem.parent_id ? categories.find(item => item.id === currentItem.parent_id) : null

  return {
    ...currentItem,
    parent: parentItem ? getItemWithParent(parentItem.id, categories) : null,
  }
}

const getPathById = (categoryId, categories) => {
  const itemWithParent = getItemWithParent(categoryId, categories)
  const basePath = `${itemWithParent.text}${itemWithParent.parent ? ',' + getPathById(itemWithParent.parent.id, categories) : '' }`

  return basePath.split(',').reverse().join(' > ')
}

export default {
  convertCategoriesToHierarchy,
  getPathById,
}