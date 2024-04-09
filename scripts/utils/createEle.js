const createEle = (tag, innerHTML, parentContainer, classList, id) => {
    const ele = document.createElement(tag);
    ele.innerHTML = innerHTML;
    classList ? ele.classList = classList : null
    id ? ele.id = id : null;
    parentContainer.append(ele);
    return ele;
}


export default createEle;