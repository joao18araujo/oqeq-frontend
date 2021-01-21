# OQEQ

* [1. Instruções para execução](#1-instruções-para-execução)

# 1. Instruções para execução

O aplicativo foi feito em React Native e testado utilizando um aparelho Android.

* Versão do *React Native:* 0.63.4
* Versão do *Node:* 12.18.2

## 1. Pré-requisitos

Para instalar o aplicativo, é preciso de:
 - Node
 - Watchman
 - React Native CLI
 - Android SDK (se for instalado em um dispositivo Android)
 - XCode (se for instalado em um dispositivo iOS)

 As instruções de instalação podem ser encontradas na [documentação do React Native](https://reactnative.dev/docs/environment-setup)

## 2. Instalação dos módulos

Para instalar os modos, execute o seguinte comando:

  `$ yarn`

## 3. Instalação do aplicativo

Primeiramente, execute o comando abaixo para rodar a ferramenta de build contínuo do React Native:

  `$ yarn react-native start`

Em outro terminal, execute um dos dois comandos abaixo:


`$ yarn react-native run-android` para instalar o aplicativo em um dispositivo Android

`$ yarn react-native run-ios` para instalar o aplicativo em um dispositivo iOS

## 4. Outros comandos

### 1. Execução do _linter_

Para rodar a ferramenta de _linter_, execute o comando abaixo:

  `$ yarn lint`

### 2. Execução dos testes

Para executar os testes unitários, execute o comando abaixo:

  `$ yarn test`