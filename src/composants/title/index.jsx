import './title.scss'
import useWindowWidth from '../../utils/Hooks/HookTaillePage'

const Title = () => {

    const width = useWindowWidth();

return (
        <h1 className="home-titre">
                {width <= 600 ? (
                <>Chez vous,<br /> partout et ailleurs</>
            ) : (
                <>Chez vous, partout et ailleurs</>
            )}
        </h1> 
    )
}

export default Title