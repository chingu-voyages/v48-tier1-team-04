import "./arCode.styles.scss";
import createEle from "../../utils/createEle";
import arImg from './ar-code.png';

const arCode = (parentContainer) => {
    const codeContainer = createEle("div", "", parentContainer, "ar-code-container", "ar-code-container");
    const code = createEle("div", "<h3>Scan with your phone for a fun AR Experience</h3>", codeContainer, "ar-code", "ar-code");
    const codeImg = createEle("img", "", code, "ar-code-img", "ar-code-img");
    codeImg.src = arImg;
    codeImg.alt = "T Rex AR  - Scanning this code will open an AR experience";
    codeContainer.onclick = () => {
        codeContainer.remove();
    }
}

export default arCode;