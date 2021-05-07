/**
* @swagger
*  /adms/{adm_id}:
*    get:
*      summary: Busca administradores pelo ID
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica
*       - in: params
*         name: adm_id
*         schema: 
*          type: string
*         required: true
*         description: Id do administrador a ser atualizado
*      tags: [Administrador]
*      description: Busca administradores expecificamente pelo ID. Somente administradores podem executar tal operação.
*      responses: 
*       '200':
*        description: Administrador encontrado pelo ID.
*        content: 
*          application/json:
*            example:
*               adm_id: 5465154844
*               adm_firebase: 9sd2gs1hy5rk
*               adm_name: Antonio Admin
*               adm_email: antonioadmin123@email.com
*       '500':
*        description: Erro do servidor
*
*/