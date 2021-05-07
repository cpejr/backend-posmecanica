/**
* @swagger
*  /connect/professor_discipline/{pd_professor_id}:
*    post:
*      summary: Permite atribuir diversas disciplinas a um professor.
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Professor_Disciplina'
*      parameters:
*       - in: header
*         name: Authorization Bearer Token
*       - in: params
*         name: pd_professor_id
*         required: true
*         description: Professor que será conectado às disciplinas.
*       - in: body
*         name: pd_dis_id
*         required: true
*         description: Disciplinas que serão ligadas ao professor.
*      tags: [Professor_Disciplina]
*      description: Permite a conexão de várias disciplinas a um professor e a armazena numa tabela relacional.
*      responses:
*       '200':
*        description: Conexão realizada com sucesso.
*       '500':
*        description: Erro do servidor.
*
*/