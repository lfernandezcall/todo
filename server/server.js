const express = require("express");

const app = express();
const testData = {
  todoItems: [
    {
      done: false,
      edit: false,
      text: "clean the house",
      id: "1",
    },
    {
      done: false,
      edit: false,
      text: "drink beer",
      id: "2",
    },
    {
      done: false,
      edit: false,
      text: "take a nap!",
      id: "3",
    },
  ],
};

app.get("/", (req, res) => {
  res.send(testData);
});

app.listen(5000, () => {
  console.log("Aplicattion listening on port 5000");
});
