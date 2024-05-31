// Импорт необходимых компонентов Selenium
const { Builder, By, Key } = require('selenium-webdriver');

// Настройка и выполнение Selenium теста
async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Открыть веб-приложение, где управляется состояние Redux
        await driver.get('https://example.com/login');

        // Имитировать вход пользователя и проверить воздействие на состояние Redux
        await driver.findElement(By.id('username')).sendKeys('пользователь1');
        await driver.findElement(By.id('password')).sendKeys('моепароль', Key.RETURN);

        // Добавить утверждения для проверки состояния Redux после входа
        // Например, получите обновленное состояние входа из хранилища Redux и сделайте утверждения
        let loginState = await driver.executeScript('return window.store.getState().login');
        console.log('Текущее состояние входа:', loginState);

    } finally {
        // Закрыть сеанс браузера
        await driver.quit();
    }
}

example().catch(console.error);
