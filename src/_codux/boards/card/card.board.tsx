import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: 1,
                overview:
                    'lorem15loremloremloremloremloremloremloremloremlroremloremloremlormeloremrlire,liremliremlire',
                release_date: '2000',
                title: 'Avatar',
                vote_average: 8,
                poster_path: 'https://i.blogs.es/5ab1ca/avatar-2-sentido-agua/1366_2000.jpeg',
            }}
        />
    ),
    environmentProps: {
        windowHeight: 640,  
    },
});
