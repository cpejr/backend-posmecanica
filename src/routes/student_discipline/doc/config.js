/**
* @swagger
* tags:
*   name: Estudante_Disciplina
*   description: Tabela que relaciona estudantes e disciplinas 
*/

/**
* @swagger
* components:
*  schemas:
*    Estudante_Disciplina:
*      type: object
*      required:
*        - student_dis_id
*        - sd_student_id
*        - sd_dis_id
*      properties:
*        student_dis_id:
*           type: uuid
*           description: Campo autogerado.
*        sd_student_id:
*            type: uuid
*            description: ID do estudante o qual você vai atribuir as disciplinas.
*        sd_dis_id:
*            type: string
*            description: ID das disciplinas que serão atribuídas ao estudante.
*        student_dis_grades:
*            type: string
*            description: Campo de notas do estudante para cada disciplina.
*/