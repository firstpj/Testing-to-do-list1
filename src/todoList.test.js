import {
  addItem, removeItem, getTodoList,
} from './todoList.js';
// import showToDoList from './show.js';

describe('test for crud operations', () => {
  test('addItem,', () => {
    const initialQuantity = getTodoList().length;
    addItem('item1');
    expect(getTodoList().length).toBe(initialQuantity + 1);
  });
  test('removeItem,', () => {
    const initialQuantity = getTodoList().length;
    removeItem(0);
    expect(getTodoList().length).toBe(initialQuantity - 1);
  });
});
