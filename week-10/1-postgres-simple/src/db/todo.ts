import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    await client.connect();
    const query = "INSERT INTO todos (user_id, title, description,done) VALUES ($1, $2, $3,false);"
    const values = [userId,title, description];
    const res = client.query(query,values);
    console.log(res);
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    await client.connect();
    const query = "UPDATE todos SET done = true WHERE id = $1;"
    const values = [todoId];
    const res = client.query(query,values);
    console.log(res);
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    await client.connect();
    const query = "SELECT * from todos WHERE user_id = $1;"
    const values = [userId];
    const res = client.query(query,values);
    console.log(res);
}