import YogaIcon from '../../assets/YogaIcon.png'
import SwimmingIcon from '../../assets/SwimIcon.png'
import BikeIcon from '../../assets/BikeIcon.png'
import TrainingIcon from '../../assets/TrainingIcon.png'
import Copyright from '../../assets/Copyright2020.png'

function Footer(){
    return(
    <footer>
        <form className="form-inline d-flex flex-column">
            <button className="btn btn-sm btn-outline-secondary bg-light" type="button">
                <img src={YogaIcon} alt="Yoga Icon"></img>
            </button>
            <button className="btn btn-sm btn-outline-secondary bg-light" type="button">
                <img src={SwimmingIcon} alt="Swimming Icon"></img>
            </button>
            <button className="btn btn-sm btn-outline-secondary bg-light" type="button">
                <img src={BikeIcon} alt="Bike Icon"></img>
            </button>
            <button className="btn btn-sm btn-outline-secondary bg-light" type="button">
                <img src={TrainingIcon} alt="Training Icon"></img>
            </button>
        </form>
        <img src={Copyright} alt="Copyright 2020"></img>
    </footer>
    )
}

export default Footer;