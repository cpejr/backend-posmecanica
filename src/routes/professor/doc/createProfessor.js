/**
* @swagger
*  /professors:
*    post:
*      summary: Criar professores
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Professor'
*      parameters:
*       - in: header
*         name: Authorization Bearer Token
*         schema:
*          type: string
*         required: true
*         description: Autorização básica
*       - in: body
*         name: prof_name
*         schema:
*           type: string
*         required: true
*         description: Nome do professor.
*       - in: body
*         name: prof_email
*         schema:
*           type: string
*         required: true
*         description: Email do professor.
*       - in: body
*         name: prof_gender
*         schema:
*           type: string
*         required: true
*         description: Gênero do professor.
*       - in: body
*         name: prof_active
*         schema:
*           type: boolean
*         required: true
*         description: Verifica se o professor está ativo.
*       - in: body
*         name: prof_birth
*         schema:
*           type: string
*         required: true
*         description: Data de nascimento do professor.
*       - in: body
*         name: prof_cpf
*         schema:
*           type: string
*         required: true
*         description: CPF do professor.
*       - in: body
*         name: prof_credential
*         schema:
*           type: boolean
*         required: true
*         description: Verifica se o professor é credenciado com a UFMG.
*       - in: body
*         name: prof_type
*         schema:
*           type: string
*         required: true
*         description: Tipo do professor, podendo este ser de mestrado, doutorado, visitante e colaborador.
*       - in: body
*         name: prof_title
*         schema:
*           type: string
*         required: true
*         description: Títudo do professor.
*       - in: body
*         name: prof_title_year
*         schema:
*           type: int
*         required: true
*         description: Ano de ganho do título do referente professor.
*       - in: body
*         name: prof_university
*         schema:
*           type: string
*         required: true
*         description: Univeersidade de atuação do professor.
*       - in: body
*         name: prof_city
*         schema:
*           type: string
*         required: true
*         description: Cidade do professor.
*       - in: body
*         name: prof_state
*         schema:
*           type: string
*         required: true
*         description: Estado do professor.
*       - in: body
*         name: prof_country
*         schema:
*           type: string
*         required: true
*         description: País do professor.
*       - in: body
*         name: prof_course
*         schema:
*           type: string
*         required: true
*         description: Curso de atuação do professor.
*       - in: body
*         name: prof_treatment
*         schema:
*           type: string
*         required: true
*         description: Tratamento do professor.
*       - in: body
*         name: prof_workplane
*         schema:
*           type: string
*         required: true
*         description: Local onde o professor trabalha.
*      tags: [Professor]
*      description: Criar professor
*      responses:
*       '200':
*        description: Professor criado
*       '500':
*        description: Erro do servidor
*
*/