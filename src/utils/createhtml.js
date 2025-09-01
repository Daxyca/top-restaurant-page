export default function createHTMLElementFromString(str) {
    const [tagClassId, text] = str.split(">");
    const dotIndex = tagClassId.indexOf(".") !== -1 ? tagClassId.indexOf(".") : tagClassId.length;
    const hashIndex = tagClassId.indexOf("#") !== -1 ? tagClassId.indexOf("#") : tagClassId.length;
    const tag = dotIndex <= hashIndex ? tagClassId.slice(0, dotIndex) : tagClassId.slice(0, hashIndex);
    const className = dotIndex <= hashIndex ? tagClassId.slice(dotIndex + 1, hashIndex) : tagClassId.slice(dotIndex + 1);
    const id = hashIndex <= dotIndex ? tagClassId.slice(hashIndex + 1, dotIndex) : tagClassId.slice(hashIndex + 1);
    const element = document.createElement(tag);
    if (text) {
        element.appendChild(document.createTextNode(text));
    }
    if (className) {
        element.className = className;
    }
    if (id) {
        element.id = id;
    }
    return element;
}
