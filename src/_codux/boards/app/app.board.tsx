import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasHeight: 1025,
        canvasWidth: 1426,
        windowHeight: 768,
        windowWidth: 1024,
    },
});
