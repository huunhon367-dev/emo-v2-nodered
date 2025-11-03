const { execSync } = require("child_process");
const fs = require("fs");
const https = require("https");
const unzipper = require("unzipper");

// URL của repo ZIP trên GitHub
const url = "https://github.com/huunhon367-dev/emo-v2-nodered/archive/refs/heads/main.zip";

(async () => {
  console.log("🔄 Đang tải repo...");
  const zipPath = "/tmp/repo.zip";
  const file = fs.createWriteStream(zipPath);

  // Tải file .zip
  await new Promise((resolve, reject) => {
    https.get(url, (res) => {
      res.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    }).on("error", (err) => {
      fs.unlink(zipPath, () => reject(err));
    });
  });

  console.log("📦 Đang giải nén...");
  await fs.createReadStream(zipPath)
    .pipe(unzipper.Extract({ path: "/data" }))
    .promise();

  console.log("✅ Giải nén xong! Khởi chạy Node-RED...");
  execSync("npx node-red", { stdio: "inherit" });
})();
