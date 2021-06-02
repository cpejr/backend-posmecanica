module.exports = {
  arrayFilterWithOrCondition(array, field, filter) {
    let filteredProcess = '';
    filter.forEach((item) => {
      filteredProcess =
        filteredProcess.length === 0
          ? array.filter((obj) => obj[field] === item)
          : filteredProcess.concat(array.filter((obj) => obj[field] === item));
    });
    return filteredProcess;
  },
};
