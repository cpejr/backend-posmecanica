/**
* @swagger
*  /adms/{adm_id}:
*    put:
*      summary: Atualiza informações do administrador pelo ID
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica
*       - in: params
*         name: adm_id
*         schema: 
*          type: string
*         required: true
*         description: Id do administrador a ser atualizado
*       - in: body
*         name: Body
*         schema:
*          type: object
*          example:
*           adm_name: Matheus
*         required: true
*         description: Campos a ser atualizados
*      tags: [Administrador]
*      description: Atualizar administrador pelo ID.
*      responses: 
*       '200':
*        description: Administrador atualizado
*       '500':
*        description: Erro do servidor
*
*/