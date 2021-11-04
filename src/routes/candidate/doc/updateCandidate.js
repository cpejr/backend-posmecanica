/**
 * @swagger
 *  /candidates/{candidate_id}:
 *    put:
 *      summary: Atualiza informações do candidato pelo ID
 *      parameters:
 *       - in: header
 *         name: Authorization Bearer Token
 *         schema:
 *          type: string
 *         required: true
 *         description: Autorização básica.
 *       - in: params
 *         name: candidate_id
 *         schema:
 *          type: uuid
 *         required: true
 *         description: Id do candidato a ser atualizado.
 *       - in: body
 *         name: candidate_name
 *         required: false
 *         description: Nome do candidato que será atualizado.
 *       - in: body
 *         name: candidate_birth
 *         schema:
 *           type: date
 *         required: false
 *         description: Data de nascimento do candidato que será atualizado.
 *       - in: body
 *         name: candidate_gender
 *         required: false
 *         description: Gênero do candidato que será atualizado.
 *       - in: body
 *         name: candidate_race
 *         required: false
 *         description: Raça do candidato que será candidato.
 *       - in: body
 *         name: candidate_nationality
 *         required: false
 *         description: Nacionalidade do candidato que será atualizado.
 *       - in: body
 *         name: candidate_cpf
 *         required: false
 *         description: CPF do candidato que será atualizado.
 *       - in: body
 *         name: candidate_identity
 *         required: false
 *         description: RG do candidato que será atualizado.
 *       - in: body
 *         name: candidate_expedition
 *         required: false
 *         description: Orgão expeditor do RG do candidato que será atualizado.
 *       - in: body
 *         name: candidate_civil_state
 *         required: false
 *         description: Estado civil do candidato que será atualizado.
 *       - in: body
 *         name: candidate_voter_title
 *         required: false
 *         description: Número do titulo de eleitor candidato que será atualizado.
 *       - in: body
 *         name: candidate_zone_title
 *         schema:
 *           type: integer
 *         required: false
 *         description: Zona eleitoral do candidato que será atualizado.
 *       - in: body
 *         name: candidate_section_title
 *         schema:
 *           type: integer
 *         required: false
 *         description: Seção eleitoral do candidato que será atualizado.
 *       - in: body
 *         name: candidate_cep
 *         required: false
 *         description: CEP do candidato que será atualizado.
 *       - in: body
 *         name: candidate_state
 *         required: false
 *         description: Estado do candidato que será atualizado.
 *       - in: body
 *         name: candidate_city
 *         required: false
 *         description: Cidade do candidato que será atualizado.
 *       - in: body
 *         name: candidate_street
 *         required: false
 *         description: Rua do candidato que será atualizado.
 *       - in: body
 *         name: candidate_district
 *         required: false
 *         description: Bairro do candidato que será atualizado.
 *       - in: body
 *         name: candidate_country
 *         required: false
 *         description: País do candidato que será atualizado.
 *       - in: body
 *         name: candidate_adress_num
 *         schema:
 *           type: integer
 *         required: false
 *         description: Número da residência do candidato que será atualizado.
 *       - in: body
 *         name: candidate_email
 *         required: false
 *         description: E-mail do candidato que será atualizado.
 *       - in: body
 *         name: candidate_phone_number
 *         required: false
 *         description: Número de telefone do candidato que será atualizado.
 *       - in: body
 *         name: candidate_university
 *         required: false
 *         description: Universidade do candidato que será atualizado.
 *       - in: body
 *         name: candidate_graduation
 *         required: false
 *         description: Curso de graduação do candidato que será atualizado.
 *       - in: body
 *         name: candidate_grade
 *         required: false
 *         description: Grau de instrução do candidato (Mestrado ou Doutorado) que será atualizado.
 *       - in: body
 *         name: candidate_grade_date_begin
 *         schema:
 *           type: date
 *         required: false
 *         description: Data de início do mestrado ou doutorado do candidato que será atualizado.
 *       - in: body
 *         name: candidate_grade_date_end
 *         schema:
 *           type: date
 *         required: false
 *         description: Data de finalização do mestrado ou doutorado do candidato que será atualizado.
 *       - in: body
 *         name: candidate_pGraduate_university
 *         required: false
 *         description: Universidade em que o candidato, que será atualizado, fez sua pós-graduação.
 *       - in: body
 *         name: candidate_ufmg_active_serv
 *         schema:
 *           type: boolean
 *         required: false
 *         description: Confere se o candidato a ser atualizado é um servidor ativo da UFMG.
 *       - in: body
 *         name: candidate_ufmg_retired_serv
 *         schema:
 *           type: boolean
 *         required: false
 *         description: Confere se o candidato a ser atualizado é um servidor aposentado da UFMG.
 *       - in: body
 *         name: candidate_date_inscrition
 *         schema:
 *           type: date
 *         required: false
 *         description: Data de inscrição do candidato no processo seletivo.
 *       - in: body
 *         name: candidate_form_approval
 *         schema:
 *           type: boolean
 *         required: false
 *         description: Verifica se a informações enviadas pelo candidato foram aprovadas.
 *       - in: body
 *         name: candidate_approval
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
 *      tags: [Candidato]
 *      description: Atualizar candidato pelo ID.
 *      responses:
 *       '200':
 *        description: Candidato atualizado.
 *       '500':
 *        description: Erro do servidor.
 *
 */
