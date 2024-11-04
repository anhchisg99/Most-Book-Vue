const peopleUrl = "http://localhost:3000/people/";
const categoryUrl = "http://localhost:3000/categories/";
const bookUrl = "http://localhost:3000/book/";
async function getPeople() {
  // const url = "http://localhost:3000/people/";
  const resp = await fetch(peopleUrl);
  const data = resp.json();
  return data;
}

async function getSlug(slug) {
  const resp = await fetch(`${peopleUrl}${slug}`);
  const data = resp.json();
  return data;
}
async function getPeopleLists() {
  const resp = await fetch(`${peopleUrl}lists`);
  const data = resp.json();
  console.log(`getSpecific ${data}`);

  return data;
}
async function getCategories() {
  const resp = await fetch(`${categoryUrl}`);
  const data = resp.json();
  console.log(`getSpecific ${data}`);

  return data;
}
async function getCategoriesSlug(slug) {
  const resp = await fetch(`${categoryUrl}search/${slug}`);
  const data = resp.json();
  console.log(`getSpecific ${data.peoples}`);
  return data;
}
async function searchPeople(search) {
  const resp = await fetch(`${peopleUrl}search?q=${search}`);
  // console.log(resp);
  const data = resp.json();
  console.log(`getSpecific ${data.people}`);
  return data;
}
async function getAllBooks() {
  const resp = await fetch(`${bookUrl}`);
  // console.log(resp);
  const data = resp.json();

  return data;
}
async function getSpecificBook(slug) {
  const resp = await fetch(`${bookUrl}/${slug}`);
  // console.log(resp);
  const data = resp.json();

  return data;
}
export {
  getPeople,
  getSlug,
  getPeopleLists,
  getCategories,
  getCategoriesSlug,
  searchPeople,
  getAllBooks,
  getSpecificBook,
};
