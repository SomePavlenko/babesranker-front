# Simple React App
 
BabesRanker

# Локальный запуск

## Установка пакетов

### `yarn install`

## Запуск

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Билд и запуск в докере
из корня проекта
## Билд
### `docker build -t babesranker-front .`
## запуск
### `docker run -p 3001:80 babesranker-front`

запуск на 3001 порту