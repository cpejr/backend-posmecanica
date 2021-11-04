/**
* @swagger
* tags:
*   name: Candidato
*   description: Candidato de um processo seletivo da pós-graduação ou de disciplinas isoladas.
*/

/**
* @swagger
* components:
*  schemas:
*    Candidato:
*      type: object
*      required:
*        - candidate_id
*        - candidate_name
*        - candidate_birth
*        - candidate_gender
*        - candidate_race
*        - candidate_nationality
*        - candidate_cpf
*        - candidate_identity
*        - candidate_expedition
*        - candidate_civil_state
*        - candidate_voter_title
*        - candidate_zone_title
*        - candidate_section_title
*        - candidate_cep
*        - candidate_state
*        - candidate_city
*        - candidate_street
*        - candidate_district
*        - candidate_country
*        - candidate_adress_num
*        - candidate_email
*        - candidate_phone_number
*        - candidate_university
*        - candidate_graduation
*        - candidate_date_inscrition
*        - candidate_process_id
*        - candidate_protocol
*        - candidate_form_approval
*      properties:
*        candidate_id:
*           type: uuid
*           description: Campo autogerado.
*        candidate_name:
*            type: string
*            description: Nome do candidato.
*        candidate_birth:
*            type: date
*            description: Data de nascimento do candidato.
*        candidate_gender:
*            type: string
*            description: Gênero do candidato.
*        candidate_race:
*            type: string
*            description: Raça do candidato.
*        candidate_nationality:
*            type: string
*            description: Nacionalidade do candidato.
*        candidate_cpf:
*            type: string
*            description: CPF do candidato.
*        candidate_identity:
*            type: string
*            description: RG do candidato.
*        candidate_expedition:
*            type: string
*            description: Orgão expeditor do RG do candidato.
*        candidate_civil_state:
*            type: string
*            description: Estado civil do candidato.
*        candidate_voter_title:
*            type: string
*            description: Número do titulo de eleitor candidato.
*        candidate_zone_title:
*            type: integer
*            description: Zona eleitoral do candidato.
*        candidate_section_title:
*            type: integer
*            description: Seção eleitoral do candidato.
*        candidate_cep:
*            type: string
*            description: CEP do candidato.
*        candidate_state:
*            type: string
*            description: Estado do candidato.
*        candidate_city:
*            type: string
*            description: Cidade do candidato.
*        candidate_street:
*            type: string
*            description: Rua do candidato.
*        candidate_district:
*            type: string
*            description: Bairro do candidato.
*        candidate_country:
*            type: string
*            description: País do candidato.
*        candidate_adress_num:
*            type: integer
*            description: Número da residência do candidato.
*        candidate_email:
*            type: string
*            description: E-mail do candidato.
*        candidate_phone_number:
*            type: string
*            description: Número de telefone do candidato.
*        candidate_university:
*            type: string
*            description: Universidade do candidato.
*        candidate_graduation:
*            type: string
*            description: Curso de graduação do candidato.
*        candidate_grade:
*            type: string
*            description: Grau de instrução do candidato (Mestrado ou Doutorado).
*        candidate_grade_date_begin:
*            type: date
*            description: Data de início do mestrado ou doutorado.
*        candidate_grade_date_end:
*            type: date
*            description: Data de finalização do mestrado ou doutorado.
*        candidate_pGraduate_university:
*            type: string
*            description: Universidade em que o candidato fez sua pós-graduação.
*        candidate_ufmg_active_serv:
*            type: boolean
*            description: Confere se o candidato é um servidor ativo da UFMG.
*        candidate_ufmg_retired_serv:
*            type: boolean
*            description: Confere se o candidato é um servidor aposentado da UFMG.
*        candidate_date_inscrition:
*            type: date
*            description: Data de inscrição do candidato no processo seletivo.
*        candidate_process_id:
*            type: uuid
*            description: ID do processo seletivo que o candidato em questão está participando.
*        candidate_protocol:
*            type: string
*            description: Protocolo de inscrição do candidato no processo seletivo, autogerado após a criação do candidato.
*        candidate_form_approval:
*            type: boolean
*            description: Verifica se a informações enviadas pelo candidato foram aprovadas.
*        candidate_approval:
*            type: boolean
*            description: Verifica se o candidato foi aprovado na prova do processo seletivo.
*        candidate_curriculum_approval:
*            type: boolean
*            description: Verifica se o currículo enviado pelo candidato foi aprovado para a inscrição em disciplinas isoladas.
*/