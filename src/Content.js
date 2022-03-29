import Monsters from './data.json';

const monsters = Monsters.map(

    (Monster) => {

        return(
            <div>
                <div className="card" style={{width: "50%"}} key={Monster.monster}>
                    <img src={Monster.image} alt="" className="card-img-top" />
                    <div className="card-body">
                    <h4 className="card-title">{Monster.monster}</h4>
                    <p className="card-text">Risk: {Monster.risk}</p>
                    <p className="card-text">Location: {Monster.location}</p>
                    </div>
                </div>
                <br /><br />
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
