/**
* @swagger
*  /discipline:
*    post:
*      summary: Criar novas disciplinas
*      requestBody: 
*         required: true
*         content: 
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Disciplina'
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica. 
*       - in: body
*         name: discipline_code
*         required: true
*         description: Código da disciplina que será criada.
*       - in: body
*         name: discipline_content
*         schema:
*           type: text
*         required: true
*         description: Ementa da disciplina que será criada.
*       - in: body
*         name: discipline_name
*         required: true
*         description: Nome da disciplina que será criada.
*       - in: body
*         name: discipline_is_isolated
*         schema:
*           type: boolean
*         required: true
*         description: Identifica se a disciplina que será criada vai ter matrícula isolada ou não.
*       - in: body
*         name: discipline_semester
*         required: true
*         description: Semestre em que a disciplina criada é ofertada.
*       - in: body
*         name: discipline_type
*         required: true
*         description: Programa para qual a disciplina criada é ofertada.
*      tags: [Disciplina]
*      description: Criar disciplina
*      responses: 
*       '200':
*        description: Disciplina criada
*       '500':
*        description: Erro do servidor
*
*/