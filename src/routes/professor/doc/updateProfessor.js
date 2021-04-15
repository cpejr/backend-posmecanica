/**
* @swagger
*  /professors/{prof_id}:
*    put:
*      summary: Atualiza informações do professor que tem como o id o passado no parâmetro
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: params
*         name: prof_id
*         schema: 
*          type: uuid
*         required: true
*         description: Id do professor a ser atualizado.
*       - in: body
*         name: Body
*         schema:
*          type: object
*          example:
*           prof_state: SE
*           prof_type: Doutorado
*         required: true
*         description: Campos a serem atualizados.
*      tags: [Professor]
*      description: Atualizar professor pelo ID.
*      responses: 
*       '200':
*        description: Professor atualizado.
*       '500':
*        description: Erro do servidor.
*
*/