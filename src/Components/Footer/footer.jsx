import YogaIcon from '../../assets/YogaIcon.png'
import SwimmingIcon from '../../assets/SwimIcon.png'
import BikeIcon from '../../assets/BikeIcon.png'
import TrainingIcon from '../../assets/TrainingIcon.png'
import Copyright from '../../assets/Copyright2020.png'

function Footer(){
    return(
    <footer>
        <form className="form-inline ps-2 pt-5 mt-5">
            <button className="btn btn-sm btn-outline-secondary bg-light" type="button">
                <img className="p-2" src={YogaIcon} alt="Yoga Icon"></img>
            </button>
            <button className="btn btn-sm btn-outline-secondary bg-light" type="button">
                <img className="p-2" src={SwimmingIcon} alt="Swimming Icon"></img>
            </button>
            <button className="btn btn-sm btn-outline-secondary bg-light" type="button">
                <img className="p-2" src={BikeIcon} alt="Bike Icon"></img>
            </button>
            <button className="btn btn-sm btn-outline-secondary bg-light mb-5" type="button">
                <img  className="p-2"src={TrainingIcon} alt="Training Icon"></img>
            </button>
        </form>
        <img className="pt-5 mt-5 ps-5" src={Copyright} alt="Copyright 2020"></img>
    </footer>
    )
}

export default Footer;