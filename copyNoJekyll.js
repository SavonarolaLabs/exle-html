// copyNoJekyll.js
import fs from 'fs-extra';

fs.outputFile('dist/.nojekyll', '', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('.nojekyll file created successfully');
  }
});
