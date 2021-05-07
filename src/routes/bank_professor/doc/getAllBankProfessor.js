/**
* @swagger
*  /getAll/bank_professor:
*    get:
*      summary: Permite listar todas as relações existentes na tabela
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*      tags: [Banca_Professor]
*      description: Permite a listagem das conexões feitas na tabela relacional
*      responses: 
*       '200':
*        description: Vetor com todas as conexões.
*       '500':
*        description: Erro do servidor.
*
*/