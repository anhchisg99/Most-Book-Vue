const peopleUrl = "http://localhost:3000/people/";
const categoryUrl = "http://localhost:3000/categories/";
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
  return data;
}
async function getCategories() {
  const resp = await fetch(`${categoryUrl}`);
  const data = resp.json();
  return data;
}
async function getCategoriesSlug(slug) {
  const resp = await fetch(`${categoryUrl}search/${slug}`);
  const data = resp.json();
  console.log(`getSpecific ${data.peoples}`);
  return data;
}
export { getPeople, getSlug, getPeopleLists, getCategories, getCategoriesSlug };
