const path = require("path");
const fsPromises = require("fs").promises;
const fs = require("fs");

// write error logs
exports.writeError = async (error) => {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const fileExists = fs.existsSync(
    path.join(
      __dirname,
      "..",
      "logs",
      `${date}_${month}_${year}_errors.log`,
    ),
  );
  if (!fileExists) {
    fsPromises.writeFile(
      path.join(
        __dirname,
        "..",
        "logs",
        `${date}_${month}_${year}_errors.log`,
      ),
      `${JSON.stringify(
        {
          time: `${hours}:${minutes}:${seconds}`,
          error: error.message,
        },
      )} \n`,
    );
  } else {
    fsPromises.appendFile(
      path.join(
        __dirname,
        "..",
        "logs",
        `${date}_${month}_${year}_errors.log`,
      ),
      `${JSON.stringify(
        {
          time: `${hours}:${minutes}:${seconds}`,
          error: error.message,
        },
      )} \n`,
    );
  }
};
