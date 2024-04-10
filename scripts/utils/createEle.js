const createEle = (tag, innerHTML, parentContainer, classList, id, pre) => {
    const ele = document.createElement(tag);
    ele.innerHTML = innerHTML;
    classList ? ele.classList = classList : null
    id ? ele.id = id : null;
    pre ? parentContainer.prepend(ele) : parentContainer.append(ele);
    return ele;
}


export default createEle;