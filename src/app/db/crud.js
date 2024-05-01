import { addressModel } from "./models/model.js"

export const createAddress = async ({ numero, rue, ville, lieu_dit, pays, type_lieu }) => {
  const newAddress = new addressModel({ numero, rue, ville, lieu_dit, pays, type_lieu })

  await newAddress.save()

  return newAddress
}


// A adapter...

export const readTodos = async () => await TodoModel.find()
export const readTodo = async (todoId) => await TodoModel.findById(todoId)
export const updateTodo = async (
  todoId,
  { description = "", isDone = false },
) => {
  const input = {
    description: description.trim() || undefined,
    isDone: isDone ?? undefined,
  }
  const updatedTodo = await TodoModel.findByIdAndUpdate(todoId, input, {
    returnDocument: "after",
  })

  return updatedTodo
}
export const deleteTodo = async (todoId) => {
  const todo = await TodoModel.findOneAndDelete({ _id: todoId })

  if (!todo) {
    return null
  }

  return todo
}
