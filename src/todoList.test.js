import {
  addItem,
  removeItem,
  getTodoList,
  editItem,
  markCompleted,
  removeCompletedItems,
} from './todoList.js';
// import showToDoList from './show.js';

describe('test for crud operations', () => {
  test('add-item', () => {
    const initialQuantity = getTodoList().length;
    addItem('item1');
    expect(getTodoList().length).toBe(initialQuantity + 1);
  });
  test('updated-item', () => {
    editItem(0, 'updatedItem');
    expect(getTodoList()[0].description).toBe('updatedItem');
  });
  test('mark-completed-item', () => {
    markCompleted(0);
    expect(getTodoList()[0].completed).toBe(true);
  });
  test('remove-completed-items', () => {
    const uncompleted = getTodoList().filter((x) => x.completed !== true).length;
    removeCompletedItems();
    expect(getTodoList().length).toBe(uncompleted);
  });
  test('removeItem,', () => {
    addItem('item1');
    const initialQuantity = getTodoList().length;
    removeItem(0);
    expect(getTodoList().length).toBe(initialQuantity - 1);
  });
});
