export async function getData(url, params) {
  const response = await fetch(url);
  var data = await response.json();

  return data.filter(filterUser, params); // params will be "this" on the callback
}

function filterUser(user) {
  var params = this; // the params passed to the callback
  for (var key in params) {
    if (key == 'age') {
      const age = params[key].split('-'); // split to have the min && max of the range
      if (!(age[0] <= user[key] && user[key] <= age[1])) {
        return false; // the user does not match age filter
      }
    } else {
      if (user[key] != params[key]) {
        return false; // the user does not match filter
      }
    }
  }
  // user is OK. He match all filters
  return true;
}