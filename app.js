const items = document.querySelector(".items");
const searchUser = document.querySelector('#search');
let users = []

const fetchImages = () => {
  fetch("https://api.github.com/users")
    .then(res => { res.json()
      .then(res => {
          users = res;
          showUsers(users)
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

const showUsers = (arr) => {
  let output = "";

arr.forEach(({ login, avatar_url}) => (output += `
<tr>
  <td class="py-2 pl-5 border-b border-gray-200 bg-white">
  <div class="flex items-center">
    <div class="flex-shrink-0 w-10 h-10">
      <img class="w-full h-full rounded-full" src=${avatar_url} />
    </div>
    <div class="ml-3">
      <h1 class="capitalize font-semibold text-base text-gray-900 whitespace-no-wrap">
      ${login}
      </h1>
    </div>
  </div>
  </td>
  <td class="py-2 text-center border-b border-gray-200 bg-white text-sm">
    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded" 
      href=https://github.com/${login}>See profile
    </a>
  </td>
</tr>
`));
  items.innerHTML = output;
}
document.addEventListener("DOMContentLoaded", fetchImages);

searchUser.addEventListener('input', e => {
  const element = e.target.value.toLowerCase()
  const newUser = users
    .filter(user => user.login
    .toLowerCase()
    .includes(element))

    showUsers(newUser)
})

