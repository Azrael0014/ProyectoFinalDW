const { Builder, By, Key, until } = require('selenium-webdriver');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function testReg() {
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

        // 3. Clickear en registrarse
        let btn__registrate = await driver.findElement(By.id('btn__registrate'));
        await btn__registrate.click();
        console.log("Icono de registrarse clickeado");
        await sleep(3000);

        // 4. Ingresar nombre completo
        let nombreCompleto = await driver.findElement(By.id('nombreCompleto'));
        await nombreCompleto.sendKeys('Randy Batista');
        console.log("Nombre completo ingresado");
        await sleep(2000);

        // 5. Ingresar correo electrónico
        let correoElectronico = await driver.findElement(By.id('correoElectronico'));
        await correoElectronico.sendKeys('usuario@gmail.com');
        console.log("Correo electrónico ingresado");
        await sleep(2000);

        // 6. Ingresar número de teléfono
        let numeroTelefono = await driver.findElement(By.id('numeroTelefono'));
        await numeroTelefono.sendKeys('8297777777');
        console.log("Número de teléfono ingresado");
        await sleep(2000);

        // 7. Ingresar contraseña
        let contraseñaPassword = await driver.findElement(By.id('contraseñaPassword'));
        await contraseñaPassword.sendKeys('12345');
        console.log("Contraseña ingresado");
        await sleep(2000);

        //8. Presionar registrarse
        let entrarRegistro = await driver.findElement(By.id('entrarRegistro'));
        await entrarRegistro.click();
        console.log("Botón de registrarse presionado");
        await sleep(3000);

    } finally {
        //cerrar navegador
        await driver.quit();
    }
}

//Ejecutar la prueba
testReg();