import Default_layout from "../../layouts/Default/Default";
import UsersList from "../../UI/UsersList/UsersList";

export default function TestPage(){

    fetch('http://hm369631.webhm.pro/api/easydonate/shop')
    .then(response => response.json())
    .then(data => console.log(data));

    
    
    return(
        <Default_layout>
            
        </Default_layout>
    );
}