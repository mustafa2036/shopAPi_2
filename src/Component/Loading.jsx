import React from "react";
import $ from 'jquery'

export default function Loading() {
    $(document).ready(()=> {
        $(".lds-spinner").fadeOut(2000, ()=>{
            $("#loading").fadeOut(1900);
        });
    })
  return (
    <>
      <section id="loading">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
}
