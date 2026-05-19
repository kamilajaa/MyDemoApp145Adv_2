# 📱 MyDemoApp - Automação Mobile Avançada com Cucumber + Page Objects

&gt; Automação de testes mobile para o app MyDemoApp (Sauce Labs) usando WebdriverIO + Appium + Cucumber + Page Objects.

---

## 📋 O que esse projeto faz

Testa fluxo avançado de compra no app MyDemoApp Android:

1. Acessa o catálogo de produtos
2. Realiza **scroll** para encontrar produtos
3. Seleciona produto por posição no catálogo
4. Adiciona produto ao carrinho
5. Retorna ao catálogo
6. Adiciona **segundo produto** ao carrinho
7. Acessa o carrinho
8. Valida nome, preço individual e **preço total**

---

## 🚀 Como rodar

### Pré-requisitos
- Node.js (versão 18)
- Android Studio com emulador criado (ex: Pixel 7 API 34)
- Appium instalado globalmente: `npm install -g appium`
- Appium Inspector (opcional, recomendado)
- JDK (Java Development Kit)
- App `MyDemoApp.apk` instalado no emulador

### Instalar dependências
```bash
npm install
