function getIssues() {
  let path = $('#fork')[0].pathname
  fetch(`https://api.github.com/repos`+path+`/issues`, {
    method: 'GET',
    headers:{
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
  console.log("testing getting issues")

}

function showIssues(json) {

  console.log(json)
  //debugger
  json.forEach(item =>
    {
      $('#issues').append(`<a href=${item.html_url}>${item.html_url}</a>`)
    }
  )

}

function createIssue() {
  let titleContent = $('#title').val()
  let bodyContent = $('#body').val()
  let path = $('#fork')[0].pathname
  const postData = {
    title: titleContent,
    body: bodyContent
  }
  fetch(`https://api.github.com/repos`+path+`/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers:{
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => getIssues(json))
}

function showResults(json) {
  console.log(json)

  $('#results').append(`<a href="${json.svn_url}" id="fork">${json.svn_url}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  //use fetch to fork it!
  fetch(`https://api.github.com/repos/`+repo+`/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ``
}
