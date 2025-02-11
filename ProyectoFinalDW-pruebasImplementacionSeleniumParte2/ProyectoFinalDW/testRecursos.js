const { Builder, By, Key, until } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function testReg() {

    let options = new edge.Options();
    options.addArguments("--autoplay-policy=no-user-gesture-required"); // Permitir reproducción automática

    let driver = await new Builder().forBrowser('MicrosoftEdge').setEdgeOptions(options).build();


    try {

        // 1. Abrir la página de prueba
        await driver.get("http://127.0.0.1:8080/ProyectoFinalDW/Home.html"); // Cambia por la ruta correcta
        await driver.manage().window().maximize();
        console.log("✅ Página de prueba cargada y maximizada");
        await sleep(2000);

        // 2. Verificar que la imagen se muestra
        let imgElement = await driver.findElement(By.id('test-image'));
        let isDisplayed = await imgElement.isDisplayed();
        console.log(isDisplayed ? "✅ Imagen está en pantalla" : "❌ Imagen NO está en pantalla");

        // 4. Verificar si la imagen ha cargado correctamente
        let isLoaded = await driver.executeScript(
            "return arguments[0].complete && arguments[0].naturalWidth > 0;", imgElement
        );
        console.log(isLoaded ? "✅ Imagen cargó correctamente" : "❌ Imagen NO se cargó (rota o incorrecta)");
        
        // 3. Reproducir el video
        let video = await driver.findElement(By.id('test-video'));
        await driver.executeScript("arguments[0].play();", video);
        await sleep(3000);
        let videoTime = await driver.executeScript("return arguments[0].currentTime;", video);
        console.log(videoTime > 0 ? "✅ Video reproducido correctamente" : "❌ El video NO se reprodujo");

        // 4. Reproducir el audio
        let audioElement = await driver.findElement(By.id('test-audio'));

        // 3. Verificar si el audio es visible
        let audioIsDisplayed = await audioElement.isDisplayed();
        console.log(audioIsDisplayed ? "✅ Audio está en pantalla" : "❌ Audio NO está en pantalla");

        // 4. Intentar reproducir el audio mediante JavaScript
        await driver.executeScript("arguments[0].play();", audioElement);
        await driver.sleep(3000); // Esperar unos segundos para que se reproduzca

        // 5. Comprobar si el audio realmente empezó a reproducirse
        let currentTime = await driver.executeScript("return arguments[0].currentTime;", audioElement);
        console.log(currentTime > 0 ? "✅ Audio está reproduciéndose" : "❌ Audio NO se está reproduciendo");
    } finally {
        //cerrar navegador
        await driver.quit();
    }
}

//Ejecutar la prueba
testReg();