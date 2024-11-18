import express, { NextFunction, Request, Response } from 'express'
const app = express()

//parsers
app.use(express.json())
app.use(express.text())

const logger = (req:Request,res:Response,next:NextFunction)=>{
  console.log(req.url,req.method,req.hostname);
  next();
}
// respond with "hello world" when a GET request is made to the homepage
app.get('/:userId/:subId',logger, (req:Request, res:Response) => {
  console.log(req.params);
  res.send('hello developer Rayhan')
})
app.get('/',logger, (req:Request, res:Response) => {
  console.log(req.query);
  res.send('hello world!')
})

app.post("/",(req:Request,res:Response)=>{
  console.log(req.body);
  res.json({
    message:"succesfully recived data"
  })
})


export default app;