# 📱 Super Frete - Mensagens

Este projeto é uma aplicação voltada para a troca de mensagens em tempo real, proporcionando uma experiência de usuário fluida e interativa. As mensagens são sincronizadas instantaneamente entre todos os dispositivos, garantindo uma comunicação contínua e sem interrupções. A interface é cuidadosamente projetada para ser responsiva e intuitiva, facilitando o uso em diferentes plataformas. Além disso, a arquitetura do projeto é escalável e de fácil manutenção, permitindo futuras expansões e aprimoramentos com eficiência.

## 🔨 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de desenvolvimento para bundling e construção de projetos modernos.
- **Capacitor**: Plataforma para criar aplicações web nativas para Android, iOS e web.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Firebase/Firestore**: Serviço de banco de dados NoSQL em tempo real.
- **Stitches**: Biblioteca de CSS-in-JS para estilização dos componentes.
- **React Testing Library**: Ferramenta de testes para componentes React.
- **Jest**: Framework de testes em JavaScript.
- **Babel**: Transpilador JavaScript.

## 🖥️ Funcionalidades

- **Armazenamento de Mensagens**: As mensagens são armazenadas de forma segura no Firestore, garantindo persistência e integridade dos dados.

- **Exibição em Tempo Real**: As mensagens são atualizadas e exibidas em tempo real na interface, proporcionando uma experiência interativa e dinâmica.

- **Suporte Multiplataforma**: A aplicação é compatível com dispositivos móveis através do Capacitor, permitindo uma experiência consistente em diferentes plataformas.

## 📂 Estrutura do Projeto

```
├── src
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── services
│   ├── utils
│   ├── main.ts
├── public
│   └── icon.svg
├── .env
├── public.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🔌 Como Rodar o Projeto

1. **Clonar o Repositório**:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Instalar as Dependências**:

   ```bash
   yarn install
   ```

3. **Configurar o Firebase**:

   - Crie um projeto no [Firebase](https://firebase.google.com/).
   - Adicione as credenciais do Firebase em um arquivo `.env` na raiz do projeto.
   - Exemplo de `.env`:
     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     VITE_MEASUREMENTID=your_measurement_id
     ```

4. **Rodar a Aplicação**:

   ```bash
   yarn dev
   ```

5. **Rodar os Testes**:

   ```bash
   yarn test
   ```

6. Rodar no Android Studio através do Capacitor:

- Adicionar a Plataforma Android:

  ```bash
  npx cap add android
  ```

- Construir o Projeto Web:

  ```bash
    Copiar código
  ```

- Sincronizar o Capacitor com a Plataforma Android:

  ```bash
  npx cap sync android
  ```

- Abrir o Android Studio:

  ```bash
  npx cap open android
  ```

  No Android Studio, você pode rodar o aplicativo em um emulador ou dispositivo físico conectado.

- Rodar a Aplicação:

  Selecione o dispositivo ou emulador na barra de ferramentas do Android Studio.
  Clique em "Run" (ícone de play) para compilar e rodar a aplicação.

## 🧪 Cobertura de Testes (Relatório):

| File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ------------------------------- | ------- | -------- | ------- | ------- | ----------------- |
| **All files**                   | 100     | 100      | 100     | 100     |                   |
| src/components/Button           | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.tsx           | 100     | 100      | 100     | 100     |                   |
| src/components/Form             | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;Form.style.ts       | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.tsx           | 100     | 100      | 100     | 100     |                   |
| src/components/Heading          | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.tsx           | 100     | 100      | 100     | 100     |                   |
| src/components/Input            | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;Input.styles.ts     | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.tsx           | 100     | 100      | 100     | 100     |                   |
| src/components/Logo             | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;Logo.styles.ts      | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.tsx           | 100     | 100      | 100     | 100     |                   |
| src/components/Message          | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;Message.styles.ts   | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.tsx           | 100     | 100      | 100     | 100     |                   |
| src/components/Messages         | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;Messages.styles.tsx | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.tsx           | 100     | 100      | 100     | 100     |                   |
| src/components/Page             | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;Page.styles.ts      | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.tsx           | 100     | 100      | 100     | 100     |                   |
| src/components/Text             | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.tsx           | 100     | 100      | 100     | 100     |                   |
| src/hooks/useMessages           | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.ts            | 100     | 100      | 100     | 100     |                   |
| src/services/firestore          | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.ts            | 100     | 100      | 100     | 100     |                   |
| src/utils                       | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;stitches.config.ts  | 100     | 100      | 100     | 100     |                   |
| src/utils/formatDateTime        | 100     | 100      | 100     | 100     |                   |
| &nbsp;&nbsp;index.ts            | 100     | 100      | 100     | 100     |                   |

**Test Suites:** 12 passed, 12 total  
**Tests:** 36 passed, 36 total  
**Snapshots:** 1 passed, 1 total  
**Time:** 13.296 s  
**Ran all test suites.**  
**Done in 20.37s.**

## 👷 Autor

Daniel Sant'Anna

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
