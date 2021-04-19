/**
* @swagger
*  /getAll/searchArea_Professor:
*    get:
*      summary: Permite listar todas as relações existentes na tabela
*      parameters:
*       - in: header
*         name: Authorization Bearer Token
*      tags: [ÁreaDePesquisa_Professor]
*      description: Permite a listagem das conexões feitas na tabela relacional
*      responses:
*       '200':
*        description: Vetor com todas as conexões existentes no sistema.
*       '500':
*        description: Erro do servidor.
*
*/