import PropTypes from "prop-types"
import "./Teachers.css"
import styles from "./Teacher.module.css";

const Teacher = ({ name, id, image, role, dept, AddtoFavorites, RemovefromFavorites, isFavorite = false }) => {
    return (
        <div className={`${styles["border-big"]} ${styles["root"]} bg-yellow`}>
            <img src={image} alt={name} style={{ height: 200, width: 300, objectFit: "contain", textAlign: "center", justifyContent: "center", display: "inline-block" }
            } />
            <h1>{name}</h1>
            <h2>{role}</h2>
            <h3>{dept}</h3>
            {/* //Create one more function which will execute AddtoFavorites// */}
            {isFavorite ? (<button onClick={() => RemovefromFavorites(id)}>Remove from Favorites</button>) : (<button onClick={() => AddtoFavorites({ name, id, image, role, dept, AddtoFavorites, RemovefromFavorites, isFavorite })}>Add to Favorites</button>)}

        </div >
    )
}
Teacher.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    image: PropTypes.string,
    role: PropTypes.string,
    dept: PropTypes.string,
    AddtoFavorites: PropTypes.func,
    RemovefromFavorites: PropTypes.func,
    isFavorite: PropTypes.bool


}
export default Teacher;