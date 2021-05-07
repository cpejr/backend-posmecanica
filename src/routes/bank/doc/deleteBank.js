/**
* @swagger
*  /banks/{bank_id}:
*    delete:
*      summary: Deleta uma banca
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: params
*         name: bank_id
*         schema: 
*          type: string
*         required: true
*         description: Id da banca a ser deletada.
*      tags: [Banca]
*      description: Deletar banca.
*      responses: 
*       '200':
*        description: Banca deletada.
*       '500':
*        description: Erro do servidor.
*
*/