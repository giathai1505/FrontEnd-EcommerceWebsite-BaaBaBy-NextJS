export const replaceTagHTML = (
  initialTag: string,
  newTag: string,
  html: string,
) => {
  const fromTag = {
    open: `<${initialTag}>`,
    close: `<${initialTag}/>`,
  };

  const toTag = {
    open: `<${newTag}>`,
    close: `<${newTag}/>`,
  };

  const fromOpenTagRegExp = new RegExp(`/${fromTag.open}/g`);
  const fromCloseTagRegExp = new RegExp(`/${fromTag.close}/g`);

  html = html.replace(fromOpenTagRegExp, toTag.open);
  html = html.replace(fromCloseTagRegExp, toTag.close);

  return html;
};
