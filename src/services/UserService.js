import http from './http-common'

export class UserService {

    all(){
        return http.get("/users")
    }

    find(id){
        return http.get(`/users/${id}`)
    }
}



