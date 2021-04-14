/**
* @swagger
*  /candidates/{candidate_process_id}:
*    post:
*      summary: Criar candidatos
*      requestBody: 
*         required: true
*         content: 
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Candidato'
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica. 
*       - in: params
*         name: candidate_process_id
*         required: true
*         description: ID do processo seletivo que o candidato a ser criado está participando.
*       - in: body
*         name: candidate_name
*         required: true
*         description: Nome do candidato que será criado.
*       - in: body
*         name: candidate_birth
*         schema:
*           type: date
*         required: true
*         description: Data de nascimento do candidato que será criado.
*       - in: body
*         name: candidate_gender
*         required: true
*         description: Gênero do candidato que será criado.
*       - in: body
*         name: candidate_race
*         required: true
*         description: Raça do candidato que será candidato.
*       - in: body
*         name: candidate_nationality
*         required: true
*         description: Nacionalidade do candidato que será criado.
*       - in: body
*         name: candidate_cpf
*         required: true
*         description: CPF do candidato que será criado.
*       - in: body
*         name: candidate_identity
*         required: true
*         description: RG do candidato que será criado.
*       - in: body
*         name: candidate_expedition
*         required: true
*         description: Orgão expeditor do RG do candidato que será criado.
*       - in: body
*         name: candidate_civil_state
*         required: true
*         description: Estado civil do candidato que será criado.
*       - in: body
*         name: candidate_voter_title
*         required: true
*         description: Número do titulo de eleitor candidato que será criado.
*       - in: body
*         name: candidate_zone_title
*         schema:
*           type: integer
*         required: true
*         description: Zona eleitoral do candidato que será criado.
*       - in: body
*         name: candidate_section_title
*         schema:
*           type: integer
*         required: true
*         description: Seção eleitoral do candidato que será criado.
*       - in: body
*         name: candidate_cep
*         required: true
*         description: CEP do candidato que será criado.
*       - in: body
*         name: candidate_state
*         required: true
*         description: Estado do candidato que será criado.
*       - in: body
*         name: candidate_city
*         required: true
*         description: Cidade do candidato que será criado.
*       - in: body
*         name: candidate_street
*         required: true
*         description: Rua do candidato que será criado.
*       - in: body
*         name: candidate_district
*         required: true
*         description: Bairro do candidato que será criado.
*       - in: body
*         name: candidate_country
*         required: true
*         description: País do candidato que será criado.
*       - in: body
*         name: candidate_adress_num
*         schema:
*           type: integer
*         required: true
*         description: Número da residência do candidato que será criado.
*       - in: body
*         name: candidate_email
*         required: true
*         description: E-mail do candidato que será criado.
*       - in: body
*         name: candidate_phone_number
*         required: true
*         description: Número de telefone do candidato que será criado.
*       - in: body
*         name: candidate_university
*         required: true
*         description: Universidade do candidato que será criado.
*       - in: body
*         name: candidate_graduation
*         required: true
*         description: Curso de graduação do candidato que será criado.
*       - in: body
*         name: candidate_grade
*         required: false
*         description: Grau de instrução do candidato (Mestrado ou Doutorado) que será criado.
*       - in: body
*         name: candidate_grade_date_begin
*         schema:
*           type: date
*         required: false
*         description: Data de início do mestrado ou doutorado do candidato que será criado.
*       - in: body
*         name: candidate_grade_date_end
*         schema:
*           type: date
*         required: false
*         description: Data de finalização do mestrado ou doutorado do candidato que será criado.
*       - in: body
*         name: candidate_pGraduate_university
*         required: false
*         description: Universidade em que o candidato, que será criado, fez sua pós-graduação.
*       - in: body
*         name: candidate_ufmg_active_serv
*         schema:
*           type: boolean
*         required: false
*         description: Confere se o candidato a ser criado é um servidor ativo da UFMG.
*       - in: body
*         name: candidate_ufmg_retired_serv
*         schema:
*           type: boolean
*         required: false
*         description: Confere se o candidato a ser criado é um servidor aposentado da UFMG.
*       - in: body
*         name: candidate_date_inscrition
*         schema:
*           type: date
*         required: true
*         description: Data de inscrição do candidato no processo seletivo.
*       - in: body
*         name: candidate_form_approval
*         schema:
*           type: boolean
*         required: true
*         description: Verifica se a informações enviadas pelo candidato foram aprovadas.
*       - in: body
*         name: candidate_test_approval
*         schema:
*           type: boolean
*         required: false
*         description: Verifica se o candidato foi aprovado na prova do processo seletivo.
*       - in: body
*         name: candidate_curriculum_approval
*         schema:
*           type: boolean
*         required: false
*         description: Verifica se o currículo enviado pelo candidato foi aprovado para a inscrição em disciplinas isoladas.
*       - in: body
*         name: candidate_rating
*         schema:
*           type: integer
*         required: false
*         description: Rank do candidato na prova do processo seletivo.
*      tags: [Candidato]
*      description: Criar candidato
*      responses: 
*       '200':
*        description: Candidato criado
*       '500':
*        description: Erro do servidor
*
*/