// connect path, una utilidad de filepath agnóstica al sistema operativo
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js", // este es el punto de entrada predeterminado de js
  },
  output: {
    // describe la ruta del archivo de salida main.js
    path: path.resolve(__dirname, "dist"), // crea la ruta de acceso al directorio dist/
    filename: "main.js",
    publicPath: "",
  },
  mode: "development", // la configuración para el modo dev sigue
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true, // esto acelerará la carga de archivos en el modo de desarrollo
    port: 8080, // abrirá tu página en localhost:8080
    open: true, // la página se abrirá automáticamente en el navegador
  },
};
