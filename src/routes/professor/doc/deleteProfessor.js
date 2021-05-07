/**
* @swagger
*  /professors/{prof_id}:
*    delete:
*      summary: Deleta um professor
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
*         description: Id do professor a ser deletado.
*      tags: [Professor]
*      description: Deletar professor.
*      responses: 
*       '200':
*        description: Professor deletado.
*       '500':
*        description: Erro do servidor.
*
*/