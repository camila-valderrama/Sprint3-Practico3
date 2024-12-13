import express from 'express';
import { connectDB } from './src/config/dbConfig.mjs';
import router from './src/routes/superHeroRoutes.mjs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = 3500;

// Simular __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurar carpeta estática
app.use(express.static(join(__dirname, 'public')));

// Configurar directorio de vistas y motor de plantillas
app.set('views', join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Middleware para parsear JSON
app.use(express.json());

//Conexión a MongoDB
connectDB();

//Configuración de rutas
app.use('/api', router);

//Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});