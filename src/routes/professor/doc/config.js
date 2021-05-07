/**
* @swagger
* tags:
*   name: Professor
*   description: Professores que farão parte das bancas e das disciplinas isoladas ofertadas pelo programa
*/

/**
* @swagger
* components:
*  schemas:
*    Professor:
*      type: object
*      required:
*        - prof_id
*        - prof_name
*        - prof_firebase_id
*        - prof_email
*        - prof_defaultPassword
*        - prof_gender
*        - prof_active
*        - prof_birth
*        - prof_cpf
*        - prof_credential
*        - prof_type
*        - prof_title
*        - prof_title_year
*        - prof_university
*        - prof_city
*        - prof_state
*        - prof_country
*        - prof_course
*        - prof_treatment
*        - prof_workplane
*      properties:
*        prof_id:
*           type: uuid
*           description: Campo autogerado.
*        prof_name:
*            type: string
*            description: Nome do professor.
*        prof_firebase_id:
*            type: uuid
*            description: Campo autogerado pelo google firebase.
*        prof_email:
*            type: string
*            description: Email do professor.
*        prof_defaultPassword:
*            type: string
*            description: Senha padrão para o professor autogerada na hora do cadastro deste.
*        prof_gender:
*            type: string
*            description: Gênero do professor.
*        prof_active:
*            type: boolean
*            description: Verifica se o professor está em atividade ou não.
*        prof_birth:
*            type: string
*            description: Data de nascimento do professor.
*        prof_cpf:
*            type: string
*            description: CPF do professor.
*        prof_credential:
*            type: boolean
*            description: Verifica se o professor é credenciado ou não com a UFMG
*        prof_type:
*            type: string
*            description: Tipo do professor, podendo este ser de mestrado, doutorado, visitante(espécie de orientador ou possivelmente ajudando em alguma disciplina isolada, mas que vai ficar por um determinado tempo limitado dentro do programa) e colaborador(não faz parte do programa mas auxilia-o em algum processo).
*        prof_title:
*            type: string
*            description: Título do professor(Mestre ou Doutor).
*        prof_title_year:
*            type: string
*            description: Ano de ganho do título do referente professor.
*        prof_university:
*            type: string
*            description: Universidade que o professor está credenciado.
*        prof_city:
*            type: string
*            description: Cidade do professor.
*        prof_state:
*            type: string
*            description: Estado do professor.
*        prof_country:
*            type: string
*            description: País do professor.
*        prof_course:
*            type: string
*            description: Curso ao qual o professor atua.
*        prof_treatment:
*            type: string
*            description: Tratamento do professor(como por exemplo "Sr.", "Dr.").
*        prof_workplane:
*            type: string
*            description: Local onde o professor trabalha.
*/