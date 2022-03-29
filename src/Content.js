import Monsters from './data.json';

const monsters = Monsters.map(

    (Monster) => {

        return(
            <div key={Monster.monster}>
                <h4>{Monster.monster}</h4>
                <p>Risk: {Monster.risk}</p>
                <p>Location: {Monster.location}</p>
                <p><img src={Monster.image} /></p>
            </div>
        );
    }
);


function Content()
{
    return(
        <div>
            <h1>Content</h1>
            {monsters}
        </div>
    );
}

export default Content;
