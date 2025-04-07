# alt-container-guide

[vitepress](https://vitepress.dev)
[vitepress ru](https://vitepress.dev/ru/)

## Tutorial

### youtube
* How To Build Your First Page in Vitepress (Как создать свою первую страницу в Vitepress) - https://www.youtube.com/watch?v=oh_n3aO3woU&pp=0gcJCX4JAYcqIYzv
* How to Create a Custom Page in Vitepress (Как создать пользовательскую страницу в Vitepress) - https://www.youtube.com/watch?v=uiVsEEy-6Cc
* Learn How to Write Beautiful Documentation with Vitepress (Узнайте, как создавать красивую документацию с помощью Vitepress) - https://www.youtube.com/watch?v=vZgY4y-rTig
* How to Implement Multiple Sidebars with Vitepress (Как реализовать несколько боковых панелей с помощью Vitepress) - https://www.youtube.com/watch?v=XVoGR-Tf9Ks


## Установка VitePress

1. Инициализируйте новый проект npm
```bash
npm init
```

2. Установите VitePress
```bash
npm install vitepress --save-dev
```

3. Добавьте скрипт запуска в package.json

```bash
    "scripts": {
        "docs:dev": "vitepress dev docs",
        "docs:build": "vitepress build docs",
        "docs:serve": "vitepress serve docs"
    }
```

4. Создайте папку docs в корне вашего проекта. Это будет основная папка для вашей документации.

5. Внутри папки docs создайте файл index.md. Это будет главная страница вашей документации.

6. Запуск для проверки, что работает

```bash
npm run docs:dev
```

7. Build

```bash
npm run docs:build
```

по умолчанию сохраняется в docs/.vitepress/dist

8. Запустить наш Build

```bash
npm run docs:serve
```

