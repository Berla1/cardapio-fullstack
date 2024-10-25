
# Cardápio Fullstack

## Descrição do Projeto
O **Cardápio Fullstack** é uma aplicação web que permite a visualização e gerenciamento de um cardápio digital. A aplicação é composta por um back-end desenvolvido em Java utilizando Spring Boot e um front-end desenvolvido em TypeScript.

## Funcionalidades
- Visualização de pratos disponíveis no cardápio.
- Adição de pratos do cardápio.
- Detalhes sobre cada prato, incluindo nome, imagem e preço.

## Tecnologias Usadas
- **Back-end:**
  - Java
  - Spring Boot
  - Spring Data JPA
  - Maven
  - Banco de dados MySQL

- **Front-end:**
  - TypeScript
  - Axios (para requisições HTTP)
  - TailwindCSS

## Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
- [Java JDK 17](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) ou superior.
- [Node.js](https://nodejs.org/) (com npm).
- [Maven](https://maven.apache.org/).

## Instruções de Instalação

### Back-end
1. Clone o repositório:
   ```bash
   git clone https://github.com/Berla1/cardapio-fullstack.git
   ```
2. Navegue até a pasta do back-end:
   ```bash
   cd cardapio-fullstack/backend
   ```
3. (Opcional) Instale as dependências com Maven:
   ```bash
   mvn clean install
   ```
4. Inicie a aplicação Spring Boot:
   ```bash
   mvn spring-boot:run
   ```
5. O back-end estará disponível em `http://localhost:8080`.

### Front-end
1. Navegue até a pasta do front-end:
   ```bash
   cd cardapio-fullstack/frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a aplicação React:
   ```bash
   npm run dev
   ```
4. O front-end estará disponível em `http://localhost:5173`.

## Importante

O banco de dados MySQL está hospedado localmente, para a aplicação funcionar corretamente, fazendo requisições no banco de dados, é necessário uma configuração local, específica no arquivo ```aplication.properties```. Alterando o ```datasource```, ```username``` e ```password```(caso existente), do seu banco local, a aplicação terá funcionamento normal
