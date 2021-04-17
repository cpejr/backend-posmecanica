/**
* @swagger
*  /students/{stud_id}:
*    delete:
*      summary: Deleta um estudante
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: params
*         name: stud_id
*         schema: 
*          type: uuid
*         required: true
*         description: Id do estudante a ser deletado.
*      tags: [Estudante]
*      description: Deletar estudantes.
*      responses: 
*       '200':
*        description: Estudante deletado.
*       '500':
*        description: Erro do servidor.
*
*/