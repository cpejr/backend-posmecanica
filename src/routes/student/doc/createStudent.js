/**
* @swagger
*  /students/{stud_process_id}/{stud_candidate_id}:
*    post:
*      summary: Criar estudantes
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Estudante'
*      parameters:
*       - in: header
*         name: Authorization Bearer Token
*         schema:
*          type: string
*         required: true
*         description: Autorização básica
*       - in: params
*         name: stud_process_id
*         schema:
*           type: string
*         required: true
*         description: ID do processo seletivo ao qual este estudante está referente.
*       - in: params
*         name: stud_candidate_id
*         schema:
*           type: string
*         required: true
*         description: ID do candidato do processo seletivo ao qual este estudante está referente.
*       - in: body
*         name: stud_registration
*         schema:
*           type: string
*         required: true
*         description: Registro do estudante.
*       - in: body
*         name: stud_name
*         schema:
*           type: string
*         required: true
*         description: Nome do estudante.
*       - in: body
*         name: stud_email
*         schema:
*           type: string
*         required: true
*         description: Email do estudante.
*       - in: body
*         name: stud_sholarship
*         schema:
*           type: boolean
*         required: true
*         description: Verifica se o estudante tem ou não bolsa de estudos.
*       - in: body
*         name: stud_prof_advisor
*         schema:
*           type: string
*         required: true
*         description: Professor orientador do referente estudante.
*       - in: body
*         name: stud_prof_coAdvisor
*         schema:
*           type: string
*         required: true
*         description: Professor co-orientador do referente estudante.
*       - in: body
*         name: stud_workplane
*         schema:
*           type: boolean
*         required: true
*         description: Verifica se o estudante mandou o plano de estudo que deve ser enviado vai email contendo informações como a área que ele quer seguir.
*       - in: body
*         name: stud_workplane_date
*         schema:
*           type: date
*         required: true
*         description: Data ao qual esse plano de estudo foi enviado pelo estudante.
*      tags: [Estudante]
*      description: Criar estudante
*      responses:
*       '200':
*        description: Estudante criado
*       '500':
*        description: Erro do servidor
*
*/