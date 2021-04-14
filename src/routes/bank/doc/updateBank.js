/**
* @swagger
*  /banks/{bank_id}:
*    put:
*      summary: Atualiza informações da banca pelo ID
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
*         description: Id da banca a ser atualizada.
*       - in: body
*         name: Body
*         schema:
*          type: object
*          example:
*           bank_type: Dissertação
*         required: true
*         description: Campos a serem atualizados.
*      tags: [Banca]
*      description: Atualizar banca pelo ID.
*      responses: 
*       '200':
*        description: Banca atualizada.
*       '500':
*        description: Erro do servidor.
*
*/