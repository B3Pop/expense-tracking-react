import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: 'ab99' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'ab99'
    });
});

test('should set up edit expense object', () => {
    const action = editExpense('cd88', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'cd88',
        updates: {
            note: 'New note value'
        }
    });
});

test('should set up add expense object with provided values', () => {
    const expenseData = {
        description: 'Coffee',
        amount: '385',
        createdAt: 12345,
        note: 'Starbucks'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should set up add expense object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'test',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});