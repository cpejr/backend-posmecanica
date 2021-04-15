/**
* @swagger
*  /discipline/{discipline_id}:
*    put:
*      summary: Atualiza informações da disciplina pelo ID
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: false
*         description: Autorização básica.
*       - in: params
*         name: discipline_id
*         schema: 
*          type: uuid
*         required: false
*         description: Id da disciplina a ser atualizada.
*       - in: body
*         name: discipline_code
*         required: false
*         description: Código da disciplina que será atualizada.
*       - in: body
*         name: discipline_content
*         schema:
*           type: text
*         required: false
*         description: Ementa da disciplina que será atualizada.
*       - in: body
*         name: discipline_name
*         required: false
*         description: Nome da disciplina que será atualizada.
*       - in: body
*         name: discipline_is_isolated
*         schema:
*           type: boolean
*         required: false
*         description: Identifica se a disciplina que será atualizada vai ter matrícula isolada ou não.
*       - in: body
*         name: discipline_semester
*         required: false
*         description: Semestre em que a disciplina a ser atualizada é ofertada.
*       - in: body
*         name: discipline_type
*         required: false
*         description: Programa para qual a disciplina a ser atualizada é ofertada.
*      tags: [Disciplina]
*      description: Atualizar disciplina pelo ID.
*      responses: 
*       '200':
*        description: Disciplina atualizada.
*       '500':
*        description: Erro do servidor.
*
*/