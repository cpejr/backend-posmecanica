/**
* @swagger
*  /adms:
*    get:
*      summary: Lista todos os administradores do sistema
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica
*      tags: [Adms]
*      description: Busca todos os administradores do sistema e listá-os. Somente administradores podem executar tal operação.
*      responses: 
*       '200':
*        description: Vetor com todos os administradores cadastrados.
*        content: 
*          application/json:
*            example:
*               adm_id: 121323546543
*               adm_firebase: uh31hdh232hus
*               adm_name: Diogo ADM
*               adm_email: diogoadm@email.com
*               
*       '500':
*        description: Erro do servidor
*
*/