const trId = document.querySelector('#trId')
const paginationUtil = document.querySelector('.pagination')

class UsersModel {
    page = 1
    limit = 2
    
    get users (){
        const users = window.localStorage.getItem('users')
        return JSON.parse(users) || usersData
    }
    renderUsers (pagination = {},isActive,search) {
        let page = pagination.page || this.page
        let limit = pagination.limit || this.limit

        let users = this.users.slice( (page-1) * limit, limit * limit)

        trId.innerHTML = null

        for (const user of users) {
            trId.innerHTML += usersUtil(user)
        }
    }
    renderPaginateButtons () {
        const buttonsLength = Math.ceil(this.users.length / this.limit)
        for (let i = 1; i <= buttonsLength; i++) {
            paginationUtil.innerHTML += buttonsUtil(i)
        }
    }
}
let usersModel = new UsersModel()

usersModel.renderUsers()
usersModel.renderPaginateButtons ()

function paginate (button){
    document.querySelectorAll('.page-item').forEach(button => button.classList.remove('active'))
    button.classList.add('active')
    usersModel.renderUsers({ page: button.lastElementChild.textContent})
}
