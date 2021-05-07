/**
* @swagger
*  /defenses/{defense_stud_id}/{defense_bank_id}/{defense_sArea_id}:
*    post:
*      summary: Criar defesas
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Defesa'
*      parameters:
*       - in: header
*         name: Authorization Bearer Token
*         schema:
*          type: string
*         required: true
*         description: Autorização básica
*       - in: params
*         name: defense_stud_id
*         schema:
*           type: uuid
*         required: true
*         description: ID do estudante que a defesa em questão está se referindo.
*       - in: params
*         name: defense_bank_id
*         schema:
*           type: uuid
*         required: true
*         description: ID da banca que a defesa em questão está se referindo.
*       - in: params
*         name: defense_sArea_id
*         schema:
*           type: uuid
*         required: true
*         description: ID da área de pesquisa que a defesa em questão está referente.
*       - in: body
*         name: defense_type
*         schema:
*           type: string
*         required: true
*         description: Tipo da defesa (Dissertação ou Tese).
*       - in: body
*         name: defense_title
*         schema:
*           type: string
*         required: true
*         description: Título da defesa.
*       - in: body
*         name: defense_content
*         schema:
*           type: string
*         required: true
*         description: Conteúdo da defesa.
*       - in: body
*         name: defense_number
*         schema:
*           type: int
*         required: true
*         description: Numeração da defesa.
*       - in: body
*         name: defense_place
*         schema:
*           type: string
*         required: true
*         description: Local ao qual a defesa vai ser realizada.
*       - in: body
*         name: defense_date
*         schema:
*           type: datetime
*         required: true
*         description: Data e horário ao qual a defesa vai ser realizada.
*       - in: body
*         name: defense_approved
*         schema:
*           type: boolean
*         required: true
*         description: Verifica se a defesa do referente estudante foi aprovada.
*      tags: [Defesa]
*      description: Criar defesa
*      responses:
*       '200':
*        description: Defesa criada
*       '500':
*        description: Erro do servidor
*
*/