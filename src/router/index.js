
import SignUp from "../view/SignUp.vue";
import{createRouter,createWebHistory} from "vue-router";
import Add from "../view/AddComponent.vue";
import ContactComp from "../view/ContactComponent.vue";
import Update from "../view/UpdateComponent.vue";

const routes= [
    
    {
        name:"SignUp",
        component:SignUp,
        path:"/",
    },
    {
        name:"Add",
        component:Add,
        path:"/Add",
    },
    {
        name:"Update",
        component:Update,
        path:"/Update",
    },
    {
        name:"Contact",
        component:ContactComp,
        path:"/Contact",
    },
];
const router=createRouter(
    {
        history:createWebHistory(),
        routes,
    }
);
export default router;