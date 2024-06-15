import User from "./User.js";
import Course from "./Course.js";
import Teacher from "./Teacher.js";
import Evaluation from "./Evaluation.js";

const associations = () => {
  Course.hasMany(Teacher);    // pode haver mais de 1 professor por curso
  User.hasMany(Evaluation);   // o aluno tem varias avaliacoes
  Course.hasMany(Evaluation); // cada curso tem varias avaliacoes
}

const factory = { associations }

export default factory;
