import { Children, createContext } from "react";
import TodoItem from "../Components/TodoItem";
import React, {useReducer} from "react";

export const todoItemsContext = createContext({
    todoItems:[],
    addNewItems:()=>{},
    deleteItem:()=>{},
});

const todoItemReducer=(currTodoItems, action)=>{
    let newTodoItems=currTodoItems
    if(action.type==='NEW_ITEM'){
      newTodoItems = [
        ...currTodoItems,
        { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
      ];
    }else if(action.type==='DELETE_ITEM'){
      newTodoItems=currTodoItems.filter((item) => item.name!==action.payload.itemName);
    }
    return newTodoItems;
  };


export const TodoItemContextProvider=({children})=>{
    const [todoItems, dispatchTodoItems]=useReducer(todoItemReducer, []);

  const addNewItem=(itemName, itemDueDate)=>{
    const newItemAction={
      type:"NEW_ITEM",
      payload:{
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction)
  }

  const deleteItem=(todoItemName)=>{
    const deleteItemAction={
        type:'DELETE_ITEM',
        payload:{
          itemName:todoItemName,
        }
      };
      dispatchTodoItems(deleteItemAction)
  };

  return <todoItemsContext.Provider 
      value={{
        todoItems,
        addNewItem, 
        deleteItem
        }}>{children}
        </todoItemsContext.Provider>
}
