/**
* @swagger
*  /connect/student_dis/{sd_student_id}:
*    post:
*      summary: Permite atribuir diversas disciplinas a um estudante
*      requestBody: 
*         required: true
*         content: 
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Estudante_Disciplina'
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*       - in: params
*         name: sd_student_id
*         required: true
*         description: Estudante que será conectado as disciplinas.
*       - in: body
*         name: sd_dis_id
*         required: true
*         description: Disciplinas que serão ligadas ao estudante.
*       - in: body
*         name: student_dis_grades
*         required: true
*         description: Notas do aluno em determinada disciplina.
*      tags: [Estudante_Disciplina]
*      description: Permite a conexão de várias disciplinas a um aluno e a armazena numa tabela relacional.
*      responses: 
*       '200':
*        description: Conexão feita.
*       '500':
*        description: Erro do servidor.
*
*/