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

  class Aluno{
    nome: string;
    nota: number;

    constructor(nome: string, nota: number){
        this.nome = nome;
        this.nota = nota;
    }
}

class Cadastro{
    alunos: Aluno[];
    quantidade: number;

    constructor(quantidade: number) {
        this.alunos = [];
        this.quantidade = quantidade;
    }

    cadastrarAluno(nome: string, nota: number){
        const aluno = new Aluno(nome, nota);
        this.alunos.push(aluno);
    }

    mostrarQuantidadeAlunos(){
       console.log(`Quantos alunos deseja cadastra? ${this.quantidade}`);
       return this.quantidade;
    }

    mostrarAlunos(){
        for(let i = 0; i < this.alunos.length; i++) {
            const aluno = this.alunos[i];
            console.log(`Aluno ${i + 1}: ${aluno.nome}, Nota: ${aluno.nota}`);
        }
    }

    mostrarMelhorAluno(){
        if(this.alunos.length === 0) {
            console.log('Não há alunos cadastrados.');
        }

        let melhorNota = 0;
        let melhorAluno = '';

        for (const aluno of this.alunos){
            if (aluno.nota > melhorNota){
                melhorNota = aluno.nota;
                melhorAluno = aluno.nome;
            }
        }

        console.log(`O aluno com a maior nota é: ${melhorAluno}, Nota: ${melhorNota}`);
    }
}
const cadastro = new Cadastro(3);
cadastro.mostrarQuantidadeAlunos();

cadastro.cadastrarAluno('Jonas', 8);
cadastro.cadastrarAluno('Luiz', 8);
cadastro.cadastrarAluno('Jorge', 10);

cadastro.mostrarAlunos();
cadastro.mostrarMelhorAluno();


});