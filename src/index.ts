/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
const readline = require ('readline');
const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

let quantidadeAlunos: number;
let nomeMelhorAluno: string;
let melhorNota: number = -Infinity; 

function perguntarQuantidadeAlunos() {
  rl.question('Quantos alunos você deseja cadastrar? ', (alunosQt: any) => {
    quantidadeAlunos = parseInt(alunosQt); 
    if (quantidadeAlunos <= 0 || isNaN(quantidadeAlunos)) {
		console.log('Por favor, insira um número válido de alunos.');
		perguntarQuantidadeAlunos(); 
	} else {
      cadastrarAlunos();
    }
  });
}

function cadastrarAlunos() {
  let alunosCadastrados = 0;

  function cadastrarProximoAluno() {
    rl.question(`Nome do aluno ${alunosCadastrados + 1}: `, (nome: any) => {
      rl.question(`Nota do aluno ${alunosCadastrados + 1}: `, (nota: any) => {
        const notaAluno = parseFloat(nota); 
        if (isNaN(notaAluno) || notaAluno < 0 || notaAluno > 10) {
          console.log('Por favor, insira uma nota válida entre 0 e 10.');
          cadastrarProximoAluno(); 
        } else {
          if (notaAluno > melhorNota) {
            melhorNota = notaAluno;
            nomeMelhorAluno = nome;
          }

          alunosCadastrados++;
          if (alunosCadastrados < quantidadeAlunos) {
            cadastrarProximoAluno();
          } else {
            console.log(`O aluno com a maior nota é ${nomeMelhorAluno} com nota ${melhorNota}`);
            rl.close(); 
          }
        }
      });
    });
  }

  cadastrarProximoAluno();
}

perguntarQuantidadeAlunos();

});
