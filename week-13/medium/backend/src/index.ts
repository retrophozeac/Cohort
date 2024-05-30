// import { Hono } from 'hono'

// import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate'
// import { sign, verify } from 'hono/jwt'


// const app = new Hono<{
// 	Bindings: {
// 		DATABASE_URL: string
//     JWT_SECRET:string
// 	}
// }>();

// app.use('/api/v1/blog/*', async (c, next) => {
//   const jwt = c.req.header('Authorization');
//   if(!jwt){
//     c.status(401);
//     return c.json({error:"Unauthorized"})
//   }
//   const token = jwt.split(' ')[1];
//   const payload = await verify(token,c.env.JWT_SECRET);
//   if(!payload){
//     c.status(401);
//     return c.json({error:"Unauthorized"})
//   }
//   c.set("userId",payload.id);
//   await next()
// })

// app.post('/api/v1/signup', async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate())

//   const body = await c.req.json();
//   try{
//     const user = await prisma.user.create({
//         data:{
//           email:body.email,
//           password:body.password
//         }
//       })
//     const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
//     return c.json({jwt})
//   } catch(e){
//     return c.status(403);
// }
// })


// app.post('/api/v1/signin', async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate())

//   const body = await c.req.json();

//   const user = await prisma.user.findUnique({
//     where:{
//       email:body.email,
//       password:body.password
//     }
//   }) 

//   if(!user){
//     c.status(403);
//     return c.json({error:"wrong username password"})
//   }
//   const jwt = await sign({id:user.id},c.env.JWT_SECRET);
//   return c.json({jwt:jwt})
// })
// app.post('/api/v1/blog', (c) => {
//   return c.text('Hello Hono!')
// })
// app.put('/api/v1/blog', (c) => {
//   return c.text('Hello Hono!')
// })
// app.get('/api/v1/blog/:id', (c) => {
//   return c.text('Hello Hono!')
// }) 

// export default app
import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { bookRouter } from './routes/blog';
import {cors} from 'hono/cors';


export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();
app.use('/*',cors());
app.route('/api/v1/user', userRouter)
app.route('/api/v1/book', bookRouter)

export default app