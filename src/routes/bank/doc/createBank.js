/**
* @swagger
*  /banks:
*    post:
*      summary: Criar bancas
*      requestBody: 
*         required: true
*         content: 
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Banca'
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica 
*       - in: body
*         name: bank_type
*         required: true
*         description: Tipo da Banca
*      tags: [Banca]
*      description: Criar banca
*      responses: 
*       '200':
*        description: Banca criada
*       '500':
*        description: Erro do servidor
*
*/