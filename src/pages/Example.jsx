import { Button } from 'primereact/button';
import TypewriterExample from '../components/TypewriterExample';

const Example = () => {
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1 className='m-5 p-5'><TypewriterExample/></h1>
            <Button label="Click Me" icon="pi pi-check" />
        </div>
    )
}
export default Example