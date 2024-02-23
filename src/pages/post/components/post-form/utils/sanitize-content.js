export const sanizeContent = (content) => content
.replaceAll('<div><br></div>', "\\n").content.replaceAll('<div>', '\\n').replaceAll('</div>', '');

