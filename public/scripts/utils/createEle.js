const createEle = (tag, innerHTML, parentContainer) => {
    const ele = document.createElement(tag);
    ele.innerHTML = innerHTML;
    parentContainer.append(ele);
    return ele;
}

export default createEle;