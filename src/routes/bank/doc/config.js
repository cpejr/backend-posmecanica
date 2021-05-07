/**
* @swagger
* tags:
*   name: Banca
*   description: Bancas que avaliam as teses, dissertações e qualificações do programa.
*/

/**
* @swagger
* components:
*  schemas:
*    Banca:
*      type: object
*      required:
*        - bank_id
*        - bank_type
*      properties:
*        bank_id:
*           type: uuid
*           description: Campo autogerado.
*        bank_type:
*            type: string
*            description: Tipo da banca (Dissertação, Tese ou Qualificação).
*/