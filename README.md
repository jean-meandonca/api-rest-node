# **Projeto NodejS + Fastify + Neon**

Este projeto é uma API simples de vídeos, seguido como tutorial do canal RocketSeat, que usa **Fastify** como servidor e **Neon (PostgreSQL)** como banco de dados.

A API permite **criar, listar, atualizar e deletar vídeos**, e utiliza **UUID gerado no Node como ID** para cada vídeo.

---

## **Como usar**

1. **Clonar o projeto**

2. **Instalar dependências**
    
    ```bash
    npm install
    ```

3. **Configurar o arquivo `.env`**
    
    - Defina a variável `DATABASE_URL` com a URL do seu banco Neon.  
    - Para isso, crie uma conta em [neon.tech](https://neon.tech), crie um projeto e configure a conexão usando **Node.js**.

4. **Criar as tabelas no banco**
    
    ```bash
    node create-table.cjs
    ```

5. **Rodar o servidor**
    
    ```bash
    npm run dev
    ```
