/**
* @swagger
* tags:
*   name: Banca_Professor
*   description: Tabela que relaciona professoras e bancas 
*/

/**
* @swagger
* components:
*  schemas:
*    Banca_Professor:
*      type: object
*      required:
*        - bank_professor_id
*        - bp_professor_id
*        - bp_bank_id
*      properties:
*        bank_professor_id:
*           type: uuid
*           description: Campo autogerado.
*        bp_professor_id:
*            type: uuid
*            description: ID do professor o qual você vai atribuir as bancas.
*        bp_bank_id:
*            type: string
*            description: ID das bancas que serão atribuídas ao professor.
*/