/**
* @swagger
*  /selectiveProcess:
*    get:
*      summary: Lista todos os processos seletivos do sistema
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*      tags: [Processo Seletivo]
*      description: Busca todos os  processos seletivos do sistema e as lista.
*      responses: 
*       '200':
*        description: Vetor com todos os processos seletivos cadastrados.
*       '500':
*        description: Erro do servidor.
*
*/