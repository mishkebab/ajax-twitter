// const { custom } = require("babel-loader");

const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-CSRF-Token": csrfToken,
    ...options.headers
  };

  const res = await fetch(url, options);
  
  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

export const foo = "bar";

export const followUser = (id) => {
  return customFetch(`http://localhost:3000/users/${id}/follow`, 
    {
      method: "POST",
      credentials: "include"
    }  
  )
}

export const unfollowUser = (id) => {
  return customFetch(`http://localhost:3000/users/${id}/follow`, 
    {
      method: "DELETE",
      credentials: "include"
    }  
  )
}






