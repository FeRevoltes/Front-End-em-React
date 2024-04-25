# Configurações do TypeScript

1. Inicializar um projeto Node.js
2. Instalar o TypeScript
   2.1 Instalação global: `npm install -g typescript`
   2.2 Instalação local (dentro do projeto): `npm install typescript -D`
3. ultilizar o TypeScript instalado para transpilar o nosso código (converter o nosso código TS para JS)
    3.1 Compilação de Ts para JS: `npx tsc index.ts`
    3.1 Compilação automática: `npx tsc index.ts --watch`
4. Criar um arquivo de configurações do TypeScript: `npx tsc --init`