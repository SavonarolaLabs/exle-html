import fs from 'fs-extra';

const srcDir = './src';
const distDir = './dist';
const baseDir = process.env.BASE_DIR || '/';

async function copyFilesAndFixBase() {
  try {
    await fs.emptyDir(distDir);
    await fs.copy(srcDir, distDir);

    const indexFile = `${distDir}/index.html`;
    if (!fs.existsSync(indexFile)) throw new Error('index.html does not exist in dist');

    let htmlContent = await fs.readFile(indexFile, 'utf8');

    htmlContent = htmlContent.replace(/<base\s+href=["'].*?["']\s*\/?>/i, `<base href="${baseDir}">`);
    await fs.writeFile(indexFile, htmlContent);

    const updatedContent = await fs.readFile(indexFile, 'utf8');
    if (!updatedContent.includes(`<base href="${baseDir}">`)) {
      throw new Error(`Failed to set the base href to "${baseDir}" in dist/index.html`);
    }

    console.log(`Base href successfully set to "${baseDir}"`);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

copyFilesAndFixBase();
