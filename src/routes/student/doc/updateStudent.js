/**
* @swagger
*  /students/{stud_id}:
*    put:
*      summary: Atualiza informações do estudante que tem como o id o passado no parâmetro
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
*         description: Id do estudante a ser atualizado.
*       - in: body
*         name: Body
*         schema:
*          type: object
*          example:
*           stud_workplane: false
*           stud_email: njr@ufmg.com 
*         required: true
*         description: Campos a serem atualizados.
*      tags: [Estudante]
*      description: Atualizar estudante pelo ID.
*      responses: 
*       '200':
*        description: Estudante atualizado.
*       '500':
*        description: Erro do servidor.
*
*/