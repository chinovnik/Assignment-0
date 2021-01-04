function titleCaseEdit(title) {
  // Use regex to replace
  return title.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
}

titleCaseEdit("to kill a mockingbird");

// Do not edit this line;
module.exports = titleCaseEdit;