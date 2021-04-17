/**
* @swagger 
*  /qualifications/{quali_stud_id}/{quali_bank_id}/{quali_sArea_id}/{quali_defense_id}:
*    post:
*      summary: Criar qualificações
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Qualificação'
*      parameters:
*       - in: header
*         name: Authorization Bearer Token
*         schema:
*          type: string
*         required: true
*         description: Autorização básica
*       - in: params
*         name: quali_stud_id
*         schema:
*           type: uuid
*         required: true
*         description: ID do estudante que a qualificação em questão está se referindo.
*       - in: params
*         name: quali_bank_id
*         schema:
*           type: uuid
*         required: true
*         description: ID da banca que a qualificação em questão está se referindo.
*       - in: params
*         name: quali_sArea_id
*         schema:
*           type: uuid
*         required: true
*         description: ID da área de pesquisa que a qualificação em questão está referente.
*       - in: params
*         name: quali_defense_id
*         schema:
*           type: uuid
*         required: true
*         description: ID da defesa que a qualificação em questão está referente.
*       - in: body
*         name: defense_title
*         schema:
*           type: string
*         required: true
*         description: Título da qualificação.
*       - in: body
*         name: quali_content
*         schema:
*           type: string
*         required: true
*         description: Conteúdo da qualificação.
*       - in: body
*         name: quali_number
*         schema:
*           type: int
*         required: true
*         description: Numeração da qualificação.
*       - in: body
*         name: quali_place
*         schema:
*           type: string
*         required: true
*         description: Local ao qual a qualificação vai ser realizada.
*       - in: body
*         name: quali_date
*         schema:
*           type: datetime
*         required: true
*         description: Data e horário ao qual a qualificação vai ser realizada.
*       - in: body
*         name: quali_approved
*         schema:
*           type: boolean
*         required: true
*         description: Verifica se a qualificação do referente estudante foi aprovada.
*      tags: [Qualificação]
*      description: Criar qualificação
*      responses:
*       '200':
*        description: Qualificação criada
*       '500':
*        description: Erro do servidor
*
*/