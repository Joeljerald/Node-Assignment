import http, { createServer } from 'http'
import dotenv from 'dotenv'

const app=createServer();

dotenv.config();
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`the server running on http://localhost:${port}`);
    
})