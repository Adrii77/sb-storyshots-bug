/**
 * This file is used to prevents mdx files importation during snapshot testing with Jest (see jest.config.js).
 */
module.exports = {
  process: function () {
    return { code: '' };
  },
};
