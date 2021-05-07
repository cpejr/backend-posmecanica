/**
* @swagger
* tags:
*   name: Processo Seletivo
*   description: Processo Seletivo para a entrada no programa de pós-graduação.
*/

/**
* @swagger
* components:
*  schemas:
*    Processo Seletivo:
*      type: object
*      required:
*        - process_id
*        - process_type
*        - process_name
*        - process_date_begin
*        - process_date_end
*      properties:
*        process_id:
*           type: uuid
*           description: Campo autogerado.
*        process_name:
*            type: string
*            description: Nome do processo Seletivo.
*        process_type:
*            type: string
*            description: Tipo do processo seletivo (Mestrado, doutorado  ou isolada)
*        process_date_begin:
*            type: date
*            description: Data de início das inscrições para o processo Seletivo.
*        process_date_end:
*            type: date
*            description: Data de encerramento das inscrições para o processo seletivo.
*/