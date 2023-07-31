import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 727,
        canvasHeight: 793,
        windowWidth: 503,
        windowHeight: 667,
    },
});
