import React from 'react';
import { shallow } from 'enzyme';
import PageLoader from '../../components/PageLoader';

test('should correctly render page loader', () => {
    const wrapper = shallow(<PageLoader />);
    expect(wrapper).toMatchSnapshot();
});
