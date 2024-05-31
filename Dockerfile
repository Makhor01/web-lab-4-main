# Используем в качестве базового образа Node.js
FROM node:latest

# Устанавливаем рабочую директорию в контейнере
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json в текущую директорию контейнера
COPY package.json .
COPY package-lock.json .

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из текущего каталога в текущую директорию контейнера
COPY ./ ./

# Осуществляем сборку проекта
RUN npm run build

# Указываем порт, который будет прослушиваться в контейнере
EXPOSE 3000

# Запускаем Node.js приложение при старте контейнера
CMD ["npm", "start"]
