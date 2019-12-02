import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[1]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Pint',
        amount: 700,
        note: 'brown ale',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});


// test('should set up add expense object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: 'test',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     });
// });