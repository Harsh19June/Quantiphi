import {app} from './app.js'; import {connectDb} from './db.js'; import {config} from './config.js';
connectDb().then(()=>app.listen(config.PORT,()=>console.log(`API listening on ${config.PORT}`))).catch(err=>{console.error(err);process.exit(1)});
