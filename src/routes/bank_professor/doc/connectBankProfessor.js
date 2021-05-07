/**
* @swagger
*  /connect/bank_professor/{bp_bank_id}:
*    post:
*      summary: Permite atribuir diversos professores a uma banca
*      requestBody: 
*         required: true
*         content: 
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Banca_Professor'
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*       - in: params
*         name: bp_bank_id
*         required: true
*         description: Banca que será conectado aos professores.
*       - in: body
*         name: bp_professor_ids
*         required: true
*         description: Professores que serão ligadas à banca.
*      tags: [Banca_Professor]
*      description: Permite a conexão de vários professores a uma banca e a armazena numa tabela relacional.
*      responses: 
*       '200':
*        description: Conexão feita.
*       '500':
*        description: Erro do servidor.
*
*/