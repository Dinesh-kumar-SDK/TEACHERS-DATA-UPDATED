import { useState } from "react";
import Teacher from "./Teacher"
import data from "./Teacher.json"

const Teachers = () => {


    const [favorites, setFavorites] = useState([]);

    //add teacher object to favorites list

    const handleAddFavorites = (teacher) => {
        //add the teacher object to the favorites
        const temp = [...favorites, teacher]
        setFavorites(temp);
    }
    const removeFromFavorites = (teacherId) => {
        // remove the teacher object whose id is teacherId, from favorites
        const temp = favorites.filter(t => t.id !== teacherId)
        setFavorites(temp);
        //eg. const arr=[{name:"Ram"},{name:"Krishna"},{name:"Hari"}];
        //arr.filter(t=>t.name!=="Hari");
    }

    return (<>
        <div>
            {console.log("Favorites", favorites)}
            <h5>Add to Favorites({favorites.length})</h5>

            <div style={{ display: "flex", flexWrap: "wrap" }}>

                {
                    data.map((teacher) => (

                        <Teacher
                            key={teacher.id}
                            id={teacher.id}
                            name={teacher.name}
                            role={teacher.role}
                            dept={teacher.dept}
                            image={teacher.image}
                            AddtoFavorites={handleAddFavorites}
                            RemovefromFavorites={removeFromFavorites}
                            isFavorite={Boolean(favorites.find((f) => f.id === teacher.id))}
                        />
                    )

                    )}
            </div>
        </div>

    </>
    )
}

export default Teachers;