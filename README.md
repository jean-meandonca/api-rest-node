###Projeto Node + Fastify + Neon

Este projeto é uma API simples de vídeos, seguido como tutorial do youtube, que usa Fastify como servidor e Neon (PostgreSQL) como banco de dados.

A API permite criar, listar, atualizar e deletar vídeos, e utiliza UUID gerado no Node como ID para cada vídeo.


Como usar:

#1 - Clonar o projeto
#2 - Instalar dependências: npm install
#3 - Configurar .env com a DATABASE_URL do Neon. Para isso criar conta no neon.tech, criar conexão com banco usando Node.js
#4 - Criar tabelas: node create-table.cjs
#5 - Rodar servidor: npm run dev
