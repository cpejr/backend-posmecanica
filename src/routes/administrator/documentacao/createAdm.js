/**
* @swagger
*  /adms:
*    post:
*      summary: Criar administradores
*      requestBody: 
*         required: true
*         content: 
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Administrador'
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica 
*       - in: body
*         name: adm_name
*         required: true
*         description: Nome do administrador
*       - in: body
*         name: adm_email
*         required: true
*         description: E-mail do administrador
*      tags: [Adms]
*      description: Criar administrador
*      responses: 
*       '200':
*        description: Administrador criado
*       '500':
*        description: Erro do servidor
*
*/