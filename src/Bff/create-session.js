import { removeComment } from "./session";
import {ROLE} from "../constants"

export const createSession = (roleId) => {

    const session ={
        logOut() {
            Object.keys(session).forEach((key) => delete session[key]);
        }
    };

    switch(roleId){
        case ROLE.ADMIN:{
            session.removeComment = removeComment;
            break;
        }
        case ROLE.MODERATOR:{
            session.removeComment = removeComment;
            break;
        }
        case ROLE.USER:{
            break
        }
        default:

    }

    return session

}