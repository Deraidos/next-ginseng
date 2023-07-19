'use client'
import { useEffect, useState } from 'react'

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  return res.json()
}

export default function FetchTest() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      const todosData = await getTodos()
      setTodos(todosData)
    }

    fetchTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      <p>Hello World</p>
    </div>
  )
}

// const getTodos = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
//   return res.json()
// }

// export default async function FetchTest() {
//   const todos = await getTodos()

//   return (
//     <div>
//       {todos.map((todo) => (
//         <div className="flex gap">
//           <p>
//             {todo.id} {todo.title}
//           </p>
//         </div>
//       ))}
//     </div>
//   )
// }

// // export default async function FetchTest() {
// //   const todos = await getTodos()

// //   return (
// //     <div>
// //       {/* {dogs.map((dog) => (
// //         <Image src={dog.message} width={100} height={100} alt={''} />
// //       ))} */}
// //       {/* <Image src={dogs.message} width={100} height={100} alt={''} /> */}

// //       {/* <img src={dogs.message} alt="" /> */}

// //       {todos.map((todo) => (
// //         <div className="flex gap">
// //           <p>
// //             {todo.id} {todo.title}
// //           </p>
// //         </div>
// //       ))}
// //     </div>
// //     // JSON objects does not need to be mapped
// //     // </div>
// //   )
// // }
