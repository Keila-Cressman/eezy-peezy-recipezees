const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const packagePath = path.join(root, "package.json");
const lockPath = path.join(root, "package-lock.json");
const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const lockJson = JSON.parse(fs.readFileSync(lockPath, "utf8"));
const versionPattern = /^(\d{4})\.(\d{2})\.(\d{2})\.(\d+)$/;
const match = versionPattern.exec(packageJson.version);

if (!match) {
  throw new Error(
    `Cannot increment version "${packageJson.version}". Expected YYYY.MM.DD.NN.`
  );
}

const now = new Date();
const date = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, "0"),
  String(now.getDate()).padStart(2, "0"),
].join(".");
const previousDate = match.slice(1, 4).join(".");
const buildNumber = previousDate === date ? Number(match[4]) + 1 : 1;
const version = `${date}.${String(buildNumber).padStart(2, "0")}`;

if (!lockJson.packages || !lockJson.packages[""]) {
  throw new Error("Cannot update package-lock.json: root package entry is missing.");
}

packageJson.version = version;
lockJson.version = version;
lockJson.packages[""].version = version;

fs.writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);
fs.writeFileSync(lockPath, `${JSON.stringify(lockJson, null, 2)}\n`);
console.log(`Updated package version to ${version}`);
