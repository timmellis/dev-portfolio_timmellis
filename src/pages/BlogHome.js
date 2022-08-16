import React from 'react';
import { Routes, Route } from 'react-router-dom'

import '../Blog.css';

import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogMain from '../components/BlogMain'
import BlogMenu from '../components/BlogMenu'

import JSHigherOrderFunctions from '../blog_articles/js_higher_order_functions';

function BlogHome() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      {/* <div className='blog-menu'>
        <BlogMenu />
      </div> */}
      
      <main className="App-main" >

        <div className='Blog-main'>
          <section>
            <Routes>
              <Route path='' element={<BlogMain />} />
              <Route path='js-arrays-higher-order-functions' element={<JSHigherOrderFunctions />} />
            </Routes>
          </section>

          <aside>
            <BlogMenu />
          </aside>
        </div>
            



      <footer className='App-footer' >
        < Footer />
      </footer>

      </main>

    </div>
  );
};

export default BlogHome;