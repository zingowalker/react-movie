import { createBoard } from '@wixc3/react-board';
import { Menu } from '../../../components/menu/menu';

export default createBoard({
    name: 'Menu',
    Board: () => <Menu />,
    environmentProps: {
        canvasHeight: 738,
        windowHeight: 640,
        canvasWidth: 265,
        windowWidth: 1024,
    },
});
