'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const util = require('util');
const path = require('path');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs-extra')

async function build() {
  const root = path.resolve(__dirname, '..');
  const sourceDir = path.resolve(root, 'src');
  const targetDir = path.resolve(root, 'lib');
  const jsTarget = targetDir;
  const cssTarget = path.resolve(targetDir, 'css');


  try {
    // clean
    process.stdout.write('Cleaning... \n');
    const cleanResult = await exec('npm run clean');

    // transpiling and copy js
    process.stdout.write('Transpiling js with babel... \n');
    const jsResult = await exec(`babel ${sourceDir} --out-dir ${jsTarget}`);

    process.stdout.write('Copying type definitions... \n');
    await fs.copy(`${sourceDir}/css/`, cssTarget);

    process.stdout.write('Copying library style definitions... \n');
    await fs.copy(`${root}/typing/index.d.ts`, `${targetDir}/index.d.ts`);

    // local (for hbatalhaStch only)
    if (fs.existsSync(`${targetDir}/DemoData-dev.js`)) {
      process.stdout.write('Removing a dev file... \n');
      fs.unlinkSync(`${targetDir}/DemoData-dev.js`)
    }

    process.stdout.write('Adding css to index.js... \n');
    await fs.appendFile(
      `${targetDir}/index.js`,
      [
        '',
        '',
        '// this line has been added by scripts/build.js',
        "require('./css/style.css');",
        '',
      ].join('\n')
    );

    process.stdout.write('Success! \n');
  } catch (e) {
    console.log(e)
    process.exit()
  }
}

build();
