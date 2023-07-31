import { createBoard } from '@wixc3/react-board';
import { Animation } from '../../../components/animation/animation';

export default createBoard({
    name: 'Animation',
    Board: () => <Animation />,
    environmentProps: {
        canvasWidth: 711,
        windowWidth: 440,
    },
});
