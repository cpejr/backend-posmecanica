/**
* @swagger
* tags:
*   name: Administrator
*   description: Administrador
*/

/**
* @swagger
* components:
*  schemas:
*    Administrator:
*      type: object
*      required:
*        - adm_id
*        - adm_firebase
*        - adm_defaultPassword
*        - adm_name
*        - adm_email
*      properties:
*        adm_id:
*           type: uuid
*           description: Campo autogerado.
*        adm_firebase:
*            type: string
*            description: Campo autogerado pelo google firebase.
*        adm_defaultPassword:
*            type: string
*            description: Campo autogerado que servirá de senha padrão para o usuário.
*        adm_name:
*            type: string
*            description: Nome do administrador.
*        adm_email:
*            type: string
*            description: Email do administrador.
*/