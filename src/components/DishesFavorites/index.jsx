import { Container } from "./style";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function DishesFavorites({dish, removeFunction}){

    const DishImage = `${api.defaults.baseURL}/files/${dish.image}`
    const navigate = useNavigate()

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    return(
        <Container>
            
            <img src={DishImage} alt={dish.title} onClick={() => handleDetails(dish.id)} />

            <div className="text">
                
                <h3 onClick={() => handleDetails(dish.id)} >
                    {dish.title}
                </h3>

                <span onClick={() => removeFunction(dish.id)}>
                    Remover dos Favoritos
                </span>

            </div>
            
        </Container>
    )
}