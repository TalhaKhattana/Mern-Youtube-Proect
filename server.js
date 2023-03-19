import express from 'express';
import path from 'path'
import router from './Routes/routes.js';
const PORT =process.env.PORT || 3000
const App =express();

App.use(express.static('/public'))
App.use(router)


App.listen(PORT,()=>{console.log(`Server Runing on Port ${PORT}`)})