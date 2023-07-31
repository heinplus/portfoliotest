import { createBoard } from '@wixc3/react-board';
import { Portfolio } from '../../../components/portfolio/portfolio';

export default createBoard({
    name: 'Portfolio',
    Board: () => <Portfolio />,
    environmentProps: {
        windowWidth: 1368,
        windowHeight: 932,
        canvasWidth: 1123,
        canvasHeight: 1256,
    },
});
