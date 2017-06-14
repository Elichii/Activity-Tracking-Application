//Written by Elias Taye elias.taye25@gmail.com 
//Main layout Component
import React from 'react';

export const MainLayout = ({content}) =>(
  <div className="main-layout">
    <header>
        <h1>------</h1>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                    <li className="navbar-brand">Activity Organizing App | </li> |
                    <li><a className="navbar-brand" href="/">Activity Category</a></li>
                    <li><a className="navbar-brand" href="/activity">Activity Details</a></li>
                    <li><a className="navbar-brand" href="/company">Company List</a></li>
            </ul>
          </div>
        </nav>
    </header>
    <main>
        {content}
    </main>



  </div>
)
