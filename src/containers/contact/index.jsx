import React from "react";
import PageHeader from "../../components/pageheader";
import { IoIosBookmarks   } from "react-icons/io";
import { Animate } from "react-simple-animate";
import './styles.css'
const Contact=()=>{
    return(
        <section id="contact" className="contact">
        <PageHeader headerText="My Contact" icon={<IoIosBookmarks   size={40} />} />
        <div className="contact_content">
          <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform:"translateX(-200px)"
          }}
          end={{
            transform:"translateX(0px)"
          }}>
            <h3 className="contact_content_header">Let's Talk</h3>

          </Animate>
          <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform:"translateX(200px)"
          }}
          end={{
            transform:"translateX(0px)"
          }}>
            <div className="contact_content_form">
              <div className="contact_content_form_controls">
                <div className="names">
                  <input required name="name" className="inputname" type={'text'} />
                  <label htmlFor="name" className="labelname">Name</label>
                </div>
                <div className="emails">
                  <input required name="name" className="inputemail" type={'text'} />
                  <label htmlFor="name" className="labelemail">Email</label>
                </div>
                <div className="descripations">
                  <textarea required name="name" className="inputdescripations" type={'text'} rows="5" />
                  <label htmlFor="name" className="labeldescripations">Descripation</label>
                </div>
              </div>
              <button>Submit</button>
            </div>
            
          </Animate>

        </div>
      </section>
    )
}
export default Contact;
    ;