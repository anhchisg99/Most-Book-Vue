<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,

    // HelloWorld,
  },
  computed: {
    nameCuong() {
      return this.$store.state.nameCuong;
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

:root {
  --blueberry: #4455b4;
  --gray: #858585;
  --text-sub: #1c1c1c;
}
input:focus {
  outline: none;
}
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
}

.container {
  /* max-width: 1280px; */
  margin: 0 auto;
  /* border: 1px solid red; */
}

.header .logo {
  width: 210px;
  height: 44px;
}

.header .logo img {
  width: 100%;
  height: 100%;
}

.searchbar {
  background-color: #f6f6f6;
  border: 1px solid #00000d;
  border-radius: 15px;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  padding: 0 5px;
}

.searchbar input {
  padding: 13px;
  border: none;
  background-color: inherit;
  border-radius: inherit;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 28px 0 28px 0;
  align-items: center;
}

.navbar ul li {
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  position: relative;
}
nav ul li a {
  color: black;
}

li {
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  position: relative;
  color: black;
}

.navbar ul li a {
  text-decoration: none;
  /* color:#fff; */
  text-transform: uppercase;
}

a {
  text-decoration: none;
  /* color:#fff; */
  /* text-transform: uppercase; */
}

.main .introduction {
  padding: 120px 0 120px 0;
  text-align: center;
  position: relative;
  width: 100%;
  /* border: 1px solid red; */
}

.main .introduction .introduction-heading {
  margin-bottom: 40px;
  font-weight: 700px;
  font-size: 50px;
  letter-spacing: -1px;
  line-height: 60px;
  font-family: "Bona Nova", serif;
}

.main .introduction .introduction-content {
  color: #4d4d4d;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
  line-height: 28px;
}

.main .introduction .introduction-donate {
  font-weight: 700;
  line-height: 19.2px;
  color: #1c1c1c;
  border: 2px solid palevioletred;
  border-radius: 10px;
  display: inline-block;
  padding: 10px;
  align-items: center;
  margin-top: 30px;
}

.main .introduction .introduction-donate a {
  display: flex;
  align-items: center;
}
.main .introduction .introduction-donate-sub {
  font-size: 0.7em;
  margin-top: 10px;
  color: var(--gray);
}
.main .introduction .introduction-donate span {
  display: inline-block;
}

.main .introduction .introduction-img-left {
  position: absolute;
  left: 0px;
  bottom: 0px;
}

.main .introduction .introduction-img-right {
  position: absolute;
  right: 0px;
  bottom: 0px;
}

.main .experts {
  padding: 55px 60px;
  /* border: 1px solid red; */
}

.main .experts .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}

.main .experts .experts-heading {
  font-size: 35px;
  letter-spacing: -0.7px;
  line-height: 38.5px;
  max-width: 300px;
  font-family: "Bona Nova", serif;
}

.card-img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
}
.card-name {
  padding-top: 10px;
  text-transform: none;
}
.card-name img {
  width: 20px;
  margin-right: 10px;
}
.card-book-total {
  text-transform: none;
  font-size: 15px;
  color: var(--gray);
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.card-book-total img {
  width: 20px;
}

.card-img img {
  border-radius: inherit;
  width: 100%;
  height: 100%;
}

.experts-list .card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1c1c1c;
  margin: 0 auto;
  text-align: center;
}

.experts-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
}

.experts-list .experts-list-card {
  width: 22%;
}

.experts {
  background-color: #fafafa;
}
.experts-list-all {
  margin-top: 43px;
}
.experts-list-all p {
  font-size: 18px;
  color: var(--blueberry);
}
.experts-list-all a {
  display: flex;
  align-items: center;
  gap: 10px;
}

.experts-list-all a i {
  font-size: 1.5em;
}

.faq {
  text-align: center;
  margin: 0 auto;
  padding: 60px;

  max-width: 580px;
}
.faq .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.faq-heading {
  font-size: 30px;
  font-family: Bona Nova, Times New Roman, sans-serif;
  line-height: 30px;
  padding-bottom: 10px;
}

.faq-sub-heading-1,
.faq-sub-heading-2 {
  width: 90%;
  text-align: left;
  line-height: 22.4px;
  color: var(--text-sub);
  opacity: 0.8;
}
.faq-sub-heading-2 {
  margin-bottom: 30px;
}

.faq-content {
  width: 100%;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 500;
  text-align: left;
}

.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: #4d4d4d; */
  background-color: #fafafa;
  padding: 80px;
}

.footer-logo {
  width: 210px;
  height: 44px;
}

.footer-logo img {
  width: 100%;
  height: 100%;
}

/* people */
.people-heading {
  text-align: center;
  color: #1c1c1c;
  /* border: 1px solid red; */
  padding: 30px;
}

.people-heading h1 {
  font-size: 50px;
  letter-spacing: -1px;
  line-height: 60px;
  font-family: "Bona Nova";
}

.people-heading h2 {
  font-size: 18px;
  font-weight: 600;
  line-height: 25.2px;
}

.main .people-submenu {
  display: flex;
  justify-content: space-between;
  padding: 33px 0px;
}

.main .people-submenu .item-list {
  font-size: 15px;
  line-height: 15px;
}

.main .people-submenu .share-button {
  display: flex;
  gap: 35px;
}

.main .people-submenu .share-button a i {
  font-size: 25px;
}

.main .people-content {
  display: flex;
  margin-bottom: 90px;
  justify-content: center;
  width: 100%;
}

.main .people-content .categories {
  max-width: 25%;
  flex: 1 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding: 20px;
  /* box-sizing: border-box; */
}

.main .people-content .categories .categories-heading {
  font-family: Raleway;
  font-size: 17px;
  font-weight: 700;
  line-height: 17px;
  margin-bottom: 15px;
}

.main .people-content .categories {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  position: sticky;
  top: 10px;
  height: fit-content;
}

.main .people-content .categories-content ul {
  display: flex;
  flex-direction: column;
  font-weight: 400;
  /* gap: 10px; */
}

.categories-item {
  margin: 7px 0px;
  line-height: 1.8em;
}

.categories-item button {
  outline: none;
  background-color: transparent;
  background-image: none;
  text-transform: none;
  border: 0;
  cursor: pointer;
  line-height: 140%;
  font-size: 1em;

  /* color: red; */

  /* border: 1px solid red; */
}
.expertsbar {
  flex: 1 0 auto;
  max-width: 75%;
}

.expertsbar-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.expertsbar-list a {
  max-width: 140px;
  margin: 15px;
}

.expertsbar-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.expertsbar-img img {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.expertsbar-item {
  /* border: 1px solid red; */
  text-align: center;
}

.expertsbar-item-text {
  color: #1c1c1c;
  font-size: 18px;
  line-height: 21.6px;
  text-transform: none;
}

.expertsbar-item-text h3 {
  margin-top: 10px;

  font-size: 18px;
  color: #1c1c1c;
  margin-bottom: 0;
  line-height: 120%;
  padding-bottom: 5px;
}

.expertsbar-item-text p {
  color: #858585;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.expertsbar-item-text img {
  width: 20px;
}

/* item  */
.info {
  margin-bottom: 80px;
}
.author-bio {
  margin-top: 15px;
}

.info-header {
  display: flex;
  justify-content: center;
  flex-direction: row;
  max-width: 1280px;
  padding: 45px 0;
  margin: 0 auto;
  gap: 15px;
}

.info-img {
  width: 150px;
  border-radius: 50%;
  height: 150px;
}

.info-img img {
  border-radius: inherit;
  width: 100%;
  height: 100%;
}

.info-details {
  max-width: 390px;
  margin-left: 15px;
}

.info-details p {
  font-size: 14px;
  color: #4d4d4d;
  line-height: 140%;
  font-weight: 600;
}

.info-maincontent-bar {
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin: 56px 0;
}

.info-maincontent h2 {
  margin-bottom: 80px;
}

.info-maincontent-bar a:nth-child(2) {
  color: #4d4d4d;
  font-weight: 600;
  line-height: 100%;
  font-family: "Raleway";
  text-transform: none;
}

.info-maincontent-bar a:nth-child(1) {
  color: #fc63ff;
  text-transform: none;
}

.info-maincontent h2 {
  margin-top: 80px;
  text-align: center;
}

/* bookitem */
.bookitems {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.bookitem {
  margin-bottom: 90px;
}
.bookitem-img {
  border-radius: 15px;
  width: 120px;
  height: 178px;
}
.bookitem-img img {
  max-width: 100%;
  border-radius: inherit;
}
.bookitem {
  width: calc(50% - 50px);
  display: flex;
  gap: 15px;
}

.bookitem-heading {
  color: #1c1c1c;
  font-size: 20px;
  letter-spacing: -0.4px;
}

.bookitem-sub {
  font-size: 16px;
  letter-spacing: -0.02em;
  line-height: 18px;
  font-weight: 400;
  color: rgb(77, 77, 77);
  margin: 6px 0px;
  display: block;
}

.bookitem-author {
  letter-spacing: -0.02em;
  font-size: 14px;
  color: rgb(137, 137, 137);
  font-weight: 500;
  margin-top: 5px;
}

.bookitem-source {
  line-height: 140%;
  letter-spacing: -0.02em;
  margin-top: 12px;
  font-style: italic;
  max-width: 400px;
  color: rgb(77, 77, 77);
  font-weight: 400;
  font-size: 14px;
}

.bookitem-btn {
  border: none;
  padding: 1px;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  margin-top: 15px;
  background: linear-gradient(rgb(251, 40, 255), rgb(83, 63, 209));
  width: 100% !important;
  padding: 20;
  cursor: pointer;
}

.bookitem-btn span {
  color: rgb(28, 28, 28);
  z-index: 2;
  transition: 0.3s ease-in-out;
  font-family: Raleway, Helvetica, arial, sans-serif;
  border-radius: 14px;
  background: rgb(255, 255, 255);
  font-weight: 700;
  /* position: relative; */
  font-size: 15px;
  display: block;
  padding: 15px 25px;
}
.default-width {
  max-width: 1280px;
  margin: 0 auto;
}
/* search page */
.searchpage {
  display: flex;
  /* flex-direction: column; */
}

.search-categories {
  width: 25%;
  /* border: 1px solid red; */
}

.booksbar {
  width: 75%;
  padding-left: 30px;
  /* border: 1px solid red; */
}

.search-heading h1 {
  font-size: 35px;
  font-family: Raleway, Helvetica, arial, sans-serif;
  line-height: 120%;
  color: #1c1c1c;
  letter-spacing: -0.02em;
  padding: 70px 0 30px 0;
  font-weight: 600;
}

.search-heading span {
  font-style: normal;
}

.search-categories-main {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px 24px;
  position: sticky;
  top: 20px;
  border: 1px solid blue;
}

.categories-heading em {
  font-size: 17px;
  font-weight: 700;
  display: block;
  padding: 0 0 6px;
}

.categories-content ul {
  display: flex;
  flex-direction: column;
}

.categories-content li {
  margin: 4px 0;
  font-weight: 600;
}

.booksbar-heading p {
  font-size: 25px;
  font-family: Bona Nova, Times New Roman, sans-serif;
  padding-bottom: 30px;
}

.book-search-result-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 30px;
}

.book-search-result-container img {
  border-radius: 15px;
  width: 115px;
  height: 158px;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}

.book-search-result-text {
  padding-left: 10px;
}

.book-search-result-text h3 {
  font-size: 20px;
  font-weight: 800;
}

.book-search-result-text h4 {
  font-size: 15px;
  color: #858585;
  padding-top: 7px;
  font-weight: 600;
}
.bookslist {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.bookslist li {
  width: 50%;
  margin: 0px;
  padding: 0px;
}
/* summaries */

.summaries-content {
  max-width: 1280px;
  margin: 0 auto 30px;
  border: 1px solid #f6f6f6;
  background-color: #fcfcfc;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
}

.summaries-content ul {
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  /* border: 1px solid red; */
  /* align-items: center; */
  justify-content: space-around;
}

.summaries-content ul li {
  width: 33, 333%;

  /* border: 1px solid red; */
}

.summaries-content ul li div {
  background: none;
  border: 0;
  height: auto;
  margin-left: 0;
  padding: 0;
  text-align: left;
  color: #4455b4;
  font-weight: 400;
  font-size: 16px;
}
/* book */
.book-info {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  /* border: 1px solid red; */
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
}

.book-info {
}

.book-info_img {
  min-width: 200px;
  height: 340px;
  border-radius: 5px;
  margin-right: 50px;
}

.book-info_img img {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
}

.book-info_content {
}

.book-info_content h2 {
  font-size: 1.25em;
  line-height: 1.75em;
  margin-bottom: 1em;
}

.book-info_content-heading {
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 2rem;
}

.book-info_content-description {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
  opacity: 0.5;
}
.book-summaries {
}
.book-summaries-heading {
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin-bottom: 1.5rem;
}

.book-summaries-content {
  white-space: pre-line;
  opacity: 0.6;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
}
</style>
