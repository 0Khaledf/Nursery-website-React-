
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import { Link } from 'react-router-dom';
import im from './im1.jpeg'; // Assuming you have an image named im1.jpeg in the same directory
export default function Main() {
  return (
    <>
    <div className='blur-background '>
    <div className='container mt-2'style={{paddingTop:'5%'}}>
      <div className='row'> {/* Corrected typo: 'raw' → 'row' */}
        <div className='col-md-6 text-center ' style={{paddingTop:'10%'}} >
          <h1 style={{color:'rgb(255, 215, 0)', padding:'5%'}}>Paradise Nursery</h1>
          <p style={{color:'white', fontWeight:'bold' }} className='text-center'>Where Green Meets Serenity</p>
           <Link to={"/plants"} className="nav-link">
          <button className="btn btn-success" style={{padding:'2%' , margin:'5%'}}> 
            Get started
          </button></Link> 
        </div>
        <div className='col-md-6 ' style={{paddingTop:'10%'}}>
          <p style={{color:'white', wordSpacing:'4px' , fontWeight:'bold'}} className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque molestias optio eveniet. Minima magni dignissimos quis excepturi nesciunt eos beatae sed illo repudiandae eligendi tenetur quasi vel incidunt perferendis temporibus nostrum aspernatur, voluptates iure! Excepturi perferendis obcaecati quisquam rerum voluptate provident animi cumque, voluptatum rem ducimus explicabo atque neque, eos perspiciatis suscipit est earum nobis fugiat quia pariatur totam optio ab. Libero temporibus rem, eius reiciendis voluptatum similique delectus. Libero sint voluptatibus nulla doloribus molestias quibusdam saepe? Est, totam quos voluptates enim nulla modi dolor repellendus itaque, harum dolore a velit dignissimos maiores quasi veritatis fugit, eos aperiam perspiciatis?
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
