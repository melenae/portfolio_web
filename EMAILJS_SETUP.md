# Настройка EmailJS для формы обратной связи

## Шаг 1: Регистрация на EmailJS

1. Перейдите на [https://www.emailjs.com/](https://www.emailjs.com/)
2. Зарегистрируйтесь или войдите в аккаунт

## Шаг 2: Создание Email Service

1. В Dashboard перейдите в раздел **Email Services**
2. Нажмите **Add New Service**
3. Выберите ваш email провайдер (Gmail, Outlook и т.д.)
4. Следуйте инструкциям для подключения вашей почты
5. **Скопируйте Service ID** (он понадобится позже)

## Шаг 3: Создание Email Template

1. Перейдите в раздел **Email Templates**
2. Нажмите **Create New Template**
3. Настройте шаблон:
   - **To Email**: ваш email (ermo.artem@gmail.com)
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: Сообщение от {{from_name}}
   - **Content**: 
     ```
     Имя: {{from_name}}
     Email: {{from_email}}
     
     Сообщение:
     {{message}}
     ```
4. **Скопируйте Template ID**

## Шаг 4: Получение Public Key

1. Перейдите в раздел **Account** → **General**
2. Найдите **Public Key**
3. **Скопируйте Public Key**

## Шаг 5: Настройка переменных окружения

1. Создайте файл `.env` в корне проекта (рядом с `package.json`)
2. Добавьте следующие строки:

```
REACT_APP_EMAILJS_SERVICE_ID=ваш_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=ваш_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=ваш_public_key
```

3. Замените значения на те, что вы скопировали на шагах 2-4

## Шаг 6: Перезапуск приложения

После создания файла `.env` перезапустите приложение:

```bash
npm start
```

## Проверка работы

1. Откройте форму обратной связи на сайте
2. Заполните и отправьте тестовое сообщение
3. Проверьте вашу почту - вы должны получить письмо

## Важно!

- Файл `.env` уже добавлен в `.gitignore` и не будет загружен в Git
- Не делитесь своими ключами публично
- Бесплатный план EmailJS позволяет отправлять до 200 писем в месяц

## Альтернатива (без переменных окружения)

Если вы не хотите использовать переменные окружения, можете напрямую указать значения в файле `src/components/Contact.js`:

```javascript
await emailjs.send(
  'your_service_id_here',
  'your_template_id_here',
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  'your_public_key_here'
);
```

Но это менее безопасно, так как ключи будут видны в коде.

