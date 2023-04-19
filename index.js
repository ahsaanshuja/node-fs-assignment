const fs = require("fs");

const main = (path) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      reject({ message: "File Does Not Exist" });
    }

    if (fs.statSync(path).isDirectory()) {
      reject({ message: "Path is a directory" });
    }

    try {
      const fileContents = fs.readFileSync(path, "utf-8");
      resolve(JSON.parse(fileContents));
    } catch (e) {
      reject({ message: "JSON Invalid" });
    }
  });
};

module.exports = main;
