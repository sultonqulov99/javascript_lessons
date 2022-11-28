const usersListHTML = document.querySelector('#usersListHTML')
const usernameSearchHTML = document.querySelector('#usernameSearch')
const paginationHTML = document.querySelector('.pagination')
const customControlInputHTML = document.querySelectorAll('.custom-control-input')

class UserModel {
	page = 1
	limit = 2
	buttonsLength
	active
	search

	get users () {
		const users = window.localStorage.getItem('users')
		return JSON.parse(users) || usersData
	}

	renderUsers (pagination = {}, isActive, search) {
		let page = pagination.page || this.page
		let limit = pagination.limit || this.limit

		this.active = typeof(isActive) == 'boolean' ? isActive : isActive == 0 ? this.active : isActive
		this.search = search ? search.toLowerCase() : undefined

		let users = this.users.filter(user => {
			let activeValue = typeof(this.active) == 'boolean' ? user.isActive == this.active : true
			let searchValue = this.search ? user.username.toLowerCase().includes(this.search) : true

			return activeValue && searchValue
		})

		this.buttonsLength = Math.ceil(users.length / this.limit)

		users = users.slice( (page - 1) * limit, limit * page )

		usersListHTML.innerHTML = null
		for(let user of users) {
			usersListHTML.innerHTML += usersHtml(user)
		}
	}

	renderPaginateButtons () {
		const buttonsLength = this.buttonsLength || Math.ceil(this.users.length / this.limit)

		paginationHTML.innerHTML = null
		for(let i = 1; i <= buttonsLength; i++) {
			paginationHTML.innerHTML += buttonsHtml(i)
		}
	}
	delet (){
		for (const user of this.users) {
			usersHtml.remove()
		}
	}

}

const userModel = new UserModel()

userModel.renderUsers({})
userModel.renderPaginateButtons()

function paginate (button) {
	document.querySelectorAll('.page-item').forEach(button => button.classList.remove('active'))
	button.className = ('active page-item')
	userModel.renderUsers({ page: button.lastElementChild.textContent })
}
function deleted () {
	userModel.delet()
}

customControlInputHTML.forEach(input => {
	input.onchange = () => {
		userModel.renderUsers({}, +input.dataset.value == 2 ? undefined : !!(+input.dataset.value))
		userModel.renderPaginateButtons()
	}
})

usernameSearchHTML.onkeyup = (event) => {
	userModel.renderUsers({}, 0, event.target.value)
	userModel.renderPaginateButtons()
}
