/**
* @swagger
* tags:
*   name: Estudante
*   description: Estudantes que farão parte do programa
*/

/**
* @swagger
* components:
*  schemas:
*    Estudante:
*      type: object
*      required:
*        - stud_id
*        - stud_firebase
*        - stud_registration
*        - stud_name
*        - stud_password
*        - stud_email
*        - stud_scolarship
*        - stud_prof_advisor
*        - stud_prof_coAdvicor
*        - stud_workplane
*        - stud_workplane_date
*        - stud_process_id
*        - stud_candidate_id
*      properties:
*        stud_id:
*           type: uuid
*           description: Campo autogerado.
*        stud_firebase:
*            type: uuid
*            description: Campo autogerado pelo google firebase.
*        stud_registration:
*            type: string
*            description: Registro do estudante.
*        stud_name:
*            type: string
*            description: Nome do estudante.
*        stud_password:
*            type: string
*            description: Senha padrão para o estudante autogerada na hora do cadastro deste.
*        stud_email:
*            type: string
*            description: Email do estudante.
*        stud_scolarship:
*            type: boolean
*            description: Verifica se o estudante tem ou não bolsa de estudos.
*        stud_prof_advisor:
*            type: string
*            description: Professor orientador do referente estudante.
*        stud_prof_coAdvisor:
*            type: string
*            description: Professor co-orientador do referente estudante.
*        stud_workplane:
*            type: boolean
*            description: Verifica se o estudante mandou o plano de estudo que deve ser enviado vai email contendo informações como a área que ele quer seguir.
*        stud_workplane_date:
*            type: date
*            description: Data ao qual esse plano de estudo foi enviado pelo estudante.
*        stud_process_id:
*            type: uuid
*            description: ID do processo seletivo ao qual este estudante está referente.
*        stud_candidate_id:
*            type: uuid
*            description: ID do candidato do processo seletivo ao qual este estudante está referente.
*/