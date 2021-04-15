/**
* @swagger
* tags:
*   name: Defesa
*   description: Defesas de tese às quais os estudantes irão fazer ao final do programa
*/

/**
* @swagger
* components:
*  schemas:
*    Defesa:
*      type: object
*      required:
*        - defense_id
*        - defense_stud_id
*        - defense_type
*        - defense_title
*        - defense_content
*        - defense_bank_id
*        - defense_sArea_id
*        - defense_number
*        - defense_place
*        - defense_date
*        - defense_approved
*      properties:
*        defense_id:
*           type: uuid
*           description: Campo autogerado.
*        defense_stud_id:
*            type: uuid
*            description: ID do estudante que a defesa em questão está se referindo.
*        defense_type:
*            type: string
*            description: Tipo da defesa (Dissertação ou Tese).
*        defense_title:
*            type: string
*            description: Título da defesa.
*        defense_content:
*            type: string
*            description: Conteúdo da defesa.
*        defense_bank_id:
*            type: uuid
*            description: ID da banca que a defesa em questão está se referindo.
*        defense_sArea_id:
*            type: uuid
*            description: ID da área de pesquisa que a defesa em questão está referente.
*        defense_number:
*            type: int
*            description: Numeração da defesa.
*        defense_place:
*            type: string
*            description: Local à qual a defesa será realizada.
*        defense_date:
*            type: datetime
*            description: Dia e horário à qual a defesa será realizada.
*        defense_approved:
*            type: boolean
*            description: Verifica de a defesa foi aprovada ou não.
*/