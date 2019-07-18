import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BookList from './views/BookList.vue'
import Book from './views/Book.vue'
import Article from './views/Article.vue'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: BookList
    },
    {
      path: '/book/:id',
      name: 'book',
      props: true,
      component: Book
    },
    {
      path: '/article/:id',
      name: 'article',
      props: true,
      component: Article
    },
    {
      path: '/search',
      name: 'search',
      props: true,
      component: Search
    },
  ]
})
