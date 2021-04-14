/**
* @swagger
*  /banks/{bank_id}:
*    get:
*      summary: Busca uma banca pelo seu ID
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica
*       - in: params
*         name: bank_id
*         schema: 
*          type: string
*         required: true
*         description: Id da banca a ser buscada.
*      tags: [Banca]
*      description: Busca uma banca especificamente pelo ID.
*      responses: 
*       '200':
*        description: Banca encontrada pelo ID.
*       '500':
*        description: Erro do servidor
*
*/