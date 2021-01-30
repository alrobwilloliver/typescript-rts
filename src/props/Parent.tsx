import { Child } from './Child';

const Parent = () => {
    return <Child onClick={() => console.log('clicked')} color='red' />
};

export default Parent;