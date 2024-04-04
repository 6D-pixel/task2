const express = require("express");
const cors = require("cors");
const zod = require("zod");
const app = express();
//db
const { User_mdb } = require("./db");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

//registration
const registerBody = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});
app.post("/api/register", async (req, res) => {
  const { success } = registerBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({ msg: "input invalid" });
  }
  const existingUser = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });
  if (existingUser) {
    res.status(411).json({ msg: "user already exists" });
  }
  //create user
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
  });
  //mongodb create
  const user_mdb = await User_mdb.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(200).json({ msg: "user created" });
});

//login
const loginBody = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});
app.post("/api/login", async (req, res) => {
  const { success } = loginBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({ msg: "input invalid" });
  }
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  if (!user) {
    res.status(411).json({ msg: "user not found/incorrect input" });
  }
  res.status(200).json({ msg: "user found" });
});

//put user details
const putBody = zod.object({
  age: zod.number().optional(),
  dob: zod.string().optional(),
  contact: zod.string().optional(),
});
app.put("/api/update/userinfo", async (req, res) => {
  const { success } = putBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({ msg: "input invalid" });
  }
  await User_mdb.updateOne(
    { email: req.body.email },
    { age: req.body.age, dob: req.body.dob, mobile: req.body.contact }
  );
  res.status(200).json({ msg: "user updated" });
});

//get user details
app.get("/api/userinfo", async (req, res) => {
  //might need to change body->query
  const user = await User_mdb.findOne({ email: req.body.email }).select(
    "age dob mobile"
  );
  //not required
  if (!user) {
    res.status(411).json({ msg: "user not found" });
  }
  res.json({ user });
});

app.listen(3000, () => {
  console.log("server started");
});
