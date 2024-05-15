const fs = require("node:fs");
const path = require("path");

(async function () {
  const dirs = fs.readdirSync(path.join(__dirname, "data"));
  const name = process?.argv[2]?.split("=")[1];
  if (!name) throw new Error("Please provide name");

  let counter = 1;
  dirs.forEach((item) => {
      const extension = path.extname(item);
      const oldPath = path.join(__dirname, "data", item);
      const newPath = path.join(
        __dirname,
        `data/${name}_${counter}${extension}`
      );
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${oldPath} -> ${newPath}`);
      counter++;
  });
})();



//node ./index.js name=Dhyey