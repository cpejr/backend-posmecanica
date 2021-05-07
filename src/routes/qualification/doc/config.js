/**
* @swagger
* tags:
*   name: Qualificação
*   description: Qualificação, que é uma espécie de pré-defesa de tese que o estudante tem direito para conseguir aprimorar a defesa final que ele irá fazer.
*/

/**
* @swagger
* components:
*  schemas:
*    Qualificação:
*      type: object
*      required:
*        - quali_id
*        - quali_stud_id
*        - quali_title
*        - quali_content
*        - quali_bank_id
*        - quali_sArea_id
*        - quali_number
*        - quali_place
*        - quali_date
*        - quali_approved
*        - quali_defense_id
*      properties:
*        quali_id:
*           type: uuid
*           description: Campo autogerado.
*        quali_stud_id:
*            type: uuid
*            description: ID do estudante que a qualificação em questão está se referindo.
*        quali_title:
*            type: string
*            description: Título da quailificação.
*        quali_content:
*            type: string
*            description: Conteúdo da qualificação.
*        quali_bank_id:
*            type: uuid
*            description: ID da banca que a qualificação em questão está se referindo.
*        quali_sArea_id:
*            type: uuid
*            description: ID da área de pesquisa que a qualificação em questão está se referindo.
*        quali_number:
*            type: int
*            description: Numeração da qualificação.
*        quali_place:
*            type: string
*            description: Local à qual a qualificação será realizada.
*        quali_date:
*            type: datetime
*            description: Dia e horário à qual a qualificação será realizada.
*        quali_approved:
*            type: boolean
*            description: Verifica se a qualificação foi aprovada ou não.
*        quali_defense_id:
*            type: uuid
*            description: ID da defesa que a qualificação em questão está se referindo.
*/