const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.post("/submit", async (req, res) => {
//   const body = req.body;
//   console.log(body);
//   const { name, link, newTags } = body;
//   const response = await fetch("http://localhost:8787/api/submit", {
//     method: "POST",
//     body: JSON.stringify({ name, link, newTags }),
//     headers: {
//       "Content-type": `application/json`,
//     },
//   });
//   res.json(response.json);
// });

// app.get("/", async (req, res) => {
//   await fetch("http://localhost:8787/api/")
//     .then((res) => res.json())
//     .then((result) => res.json(result));
// });

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await fetch(`https://course_submit.fujinzeken.workers.dev/api/delete/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((result) => res.json(result));
});

app.patch("/update", async (req, res) => {
  console.log(req.body);
  await fetch("https://course_submit.fujinzeken.workers.dev/api/update", {
    method: "PATCH",
    body: JSON.stringify(req.body),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => res.json(result));
});
app.listen(process.env.PORT || 4000, () => {
  console.log("Server is running successfully");
});
