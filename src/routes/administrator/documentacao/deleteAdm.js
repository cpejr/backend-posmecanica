/**
* @swagger
*  /adms/{adm_id}:
*    delete:
*      summary: Deleta administradores
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
*         description: Id do administrador a ser deletado
*      tags: [Adms]
*      description: Deletar usuário do tipo Administrador.
*      responses: 
*       '200':
*        description: Administrador deletado
*       '500':
*        description: Erro do servidor
*
*/