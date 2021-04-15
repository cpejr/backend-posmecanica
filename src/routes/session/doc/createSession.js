/**
* @swagger
*  /login:
*    post:
*      summary: Permite logar o usuário com email e senha obriigatórios.
*      requestBody: 
*         required: true
*         content: 
*          application/json: 
*           - email
*           - password
*           - type
*      parameters: 
*       - in: body
*         name: email
*         required: true
*         description: Email do usuário
*       - in: body
*         name: password
*         required: true
*         description: Senha do usuário
*       - in: body
*         name: type
*         required: true
*         description: Tipo do usuário (Estudante, professor ou administrador)
*      tags: [Session]
*      description: Permite que o usuário se autentique na aplicação. 
*      responses: 
*       '200':
*        description: Autenticado com sucesso.
*       '400': 
*        description: Requisição mal feita.
*       '403': 
*        description: Credenciais inválidas.
*       '500':
*        description: Erro do servidor.
*
*/