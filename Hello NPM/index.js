import inquirer from 'inquirer';

inquirer.prompt([ // pergunta
    {
      type: 'input',
      name: 'username',
      message: 'Qual seu nome? ',
    },
    {
      type: 'list',
      name: 'idade',
      message: 'Qual sua idade? ',
      choices: [
        '18 a 29',
        '30 a 49',
        '40 a 59',
        '60 +'
      ]
    }
  ])
  .then((answers) => { // resposta
    console.log("Hello " + answers.username + ' com ' + answers.idade + ' anos');
  });