import moment from 'moment';

export default [{
    id: '1',
    description: 'lunch',
    note: '',
    amount: 1100,
    createdAt: 0
}, {
    id: '2',
    description: 'breakfast',
    note: '',
    amount: 1300,
    createdAt: moment(0).subtract(2, 'days').valueOf()
}, {
    id: '3',
    description: 'dinner',
    note: '',
    amount: 1800,
    createdAt: moment(0).add(2, 'days').valueOf()
}];
