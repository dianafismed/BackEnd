import express from "express";
let router = express.Router();

import userService from "../services/UserService.js";

// salvar usuario
router.post("/addUser", async function (req, res) {
  const userModel = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
  }
  const user = await userService.saveUser(userModel);
  return res.status(200).json(user);
});

// buscar todos usuarios
router.get("/getAllUsers", async function (req, res) {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
});

// buscar por id
router.get("/user/:id", async function (req, res) {
  const user = await userService.getUserById(req.params.id);
  return res.status(200).json(user);
});

// deletar por id
router.delete("/deleteUser/:id", async function (req, res) {
  const user = await userService.deleteUserById(req.params.id);
  return res.status(200).json(user);
});

//  atualizar por id
router.put("/updateUser/:id", async function (req, res) {
  const userModel = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
  }
  const user = await userService.updateUserById(req.params.id, userModel);
  return res.status(200).json(user);
});

router.get('/userImage/:id', async function (req, res){
  const user = await userService.getUserById(req.params.id);
  res.sendFile(process.cwd() + "\\" + user.profile_picture);
});

export default router;
