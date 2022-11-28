function usersUtil(user){
    return  `
    <tr>
        <td class="align-middle">
            <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                <input type="checkbox" class="custom-control-input" id="item-3">
                <label class="custom-control-label" for="item-3"></label>
            </div>
        </td>
        <td class="text-nowrap align-middle">${user.username}</td>
        <td class="text-nowrap align-middle"><span>${user.date}</span></td>
        <td class="text-center align-middle"><i class="fa fa-fw text-secondary cursor-pointer fa-toggle-on"></i></td>
        <td class="text-center align-middle">
            <div class="btn-group align-top">
                <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
                <button class="btn btn-sm btn-outline-secondary badge" type="button"><i class="fa fa-trash"></i></button>
            </div>
        </td>
    </tr>
`
}
function buttonsUtil (index) {  
    return ` 
    <li onclick = "paginate(this)" class="page-item ${index == 1 ? 'active' : ''}">
        <a href="#" class="page-link">${index}</a>
    </li>
    `
}