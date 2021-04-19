/**
* @swagger
* tags:
*   name: Professor_Discipline
*   description: Tabela que relaciona professores e disciplinas
*/

/**
* @swagger
* components:
*  schemas:
*    Professor_Discipline:
*      type: object
*      required:
*        - professor_dis_id
*        - pd_professor_id
*        - pd_dis_id
*      properties:
*        professor_dis_id:
*           type: uuid
*           description: Campo autogerado.
*        pd_professor_id:
*            type: uuid
*            description: ID do professor o qual você vai atribuir às disciplinas.
*        pd_dis_id:
*            type: string
*            description: ID das disciplinas que serão atribuídas ao professor.
*/