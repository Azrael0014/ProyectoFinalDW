const { Builder, By, Key, until } = require('selenium-webdriver');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function testLog() {
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();

    try {
         // 1. Abrir la página y maximizar
         await driver.get('http://127.0.0.1:8080/Home.html'); 
         await driver.manage().window().maximize();
         console.log("Página cargada y maximizada.");
         await sleep(2000);

         // 2. Seleccionar el incono de "Login"
         let LoginRegistro = await driver.findElement(By.id('LoginRegistro'));
         await LoginRegistro.click();
         console.log("Icono de login clickeado");
         await sleep(3000);

         // 3. Ingresar correo electrónico
         let emailInput = await driver.findElement(By.id('emailinput'));
         await emailInput.sendKeys('usuario@gmail.com');
         console.log("Email ingresado");
         await sleep(2000);

         // 4. Ingresar contrseña
         let passwordInput = await driver.findElement(By.id('passwordinput'));
         await passwordInput.sendKeys('12345');
         console.log("Contraseña ingresada");

         // 5. Presionar entrar
         let entrarbutton = await driver.findElement(By.id('entrarbutton'));
         await entrarbutton.click();
         console.log("Botón de entrar presionado");
         await sleep(3000);

    } finally {
        //cerrar navegador
        await driver.quit();
    }
}

//Ejecutar la prueba
testLog();