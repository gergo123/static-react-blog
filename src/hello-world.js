import BarbecueIco from './assets/imgs/barbecue.png';
import GalaxyImg from './assets/imgs/webb-early-infrared.jpg'
import ExampleForm from './example-form';

const HelloWorld = ({ ...props }) => {

    return (<>
        <ExampleForm />

        <img src={BarbecueIco} />
        Hello World from react!
        <img src={GalaxyImg} />
    </>);
}

export default HelloWorld;
