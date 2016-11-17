const Auth = {
  getToken: () => {
    return localStorage.getItem('token')
  },
  getUser: () => {
    let token = Auth.getToken()
    if (!token) return {}
    else {
      return jwt_decode(token)
    }
  }
}
$(document).ready(function(){
  // AUTH
  if (!localStorage.getItem('token')) window.location = 'index.html'

  //process logout
  $('#logout').on('click', function(e){
    e.preventDefault()
    processLogout()
  })

  hideAddForm()

  $('#show_form_add').on('click', function(e){
    e.preventDefault()
    showAddForm()
  })

  $('#show_form_hide').on('click', function(e){
    e.preventDefault()
    hideAddForm()
    $('#show_form_add').show()
  })

  showAllData()
})

function showAllData(){
  $.ajax({
    url: 'http://localhost:3000/api/datas',
    success: function(all_data){
      // console.log(all_data);
      var data_HTML = ``
      for (var i = 0; i < all_data.length; i++) {
        data_HTML += `
        <div id="${all_data[i]._id}">

        </div>
        `
      }

      $('#body_table').append(data_HTML)
    }
  })
}

function showAddForm(){
  $('#show_form_hide').show()
  $('#form_new_data').show()
  $('#btn_update').show()
  $('#btn_add').hide()
  $('#show_form_add').hide()
}

function hideAddForm(){
  $('#show_form_hide').hide()
  $('#form_new_data').hide()
  $('#btn_update').hide()
}

function processLogout(){
  localStorage.removeItem('token')
  window.location = 'index.html'
}
