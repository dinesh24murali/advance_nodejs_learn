const http = require("http");
const fs = require("fs");
const path = require("path");

const videoPath = path.join(__dirname, "video.mp4"); // Path to your video file
const PORT = 3000;

const server = http.createServer((req, res) => {
  // Ensure the request is for the video
  if (req.url === "/video") {
    fs.stat(videoPath, (err, stats) => {
      if (err) {
        if (err.code === "ENOENT") {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Video file not found");
        } else {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Server error");
        }
        return;
      }

      // Extract the range header to determine the portion of the video to send
      let range = req.headers.range;
      console.log({
        range,
      });
      if (!range) {
        // If no range, send the entire file
        range = "bytes=0-";
      }

      const positions = range.replace(/bytes=/, "").split("-");
      const start = parseInt(positions[0], 10);
      const total = stats.size;
      const end = positions[1] ? parseInt(positions[1], 10) : total - 1;
      const chunksize = end - start + 1;
      console.log({
        headers: {
          "Content-Range": `bytes ${start}-${end}/${total}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunksize,
          "Content-Type": "video/mp4",
        },
      });
      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${total}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "video/mp4",
      });

      const stream = fs
        .createReadStream(videoPath, { start, end })
        .on("open", () => {
          stream.pipe(res);
        })
        .on("error", (err) => {
          res.end(err);
        });
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
