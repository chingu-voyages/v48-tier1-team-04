const createElement = (tag, innerHTML, anchor) => {
    const ele = document.createElement(tag);
    ele.innerHTML = innerHTML;
    anchor.append(ele);
}

export default createElement;