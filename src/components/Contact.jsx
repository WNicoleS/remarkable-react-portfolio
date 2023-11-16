import '../styles/style.css';

function Contact() {
    return (
        <section id="contact">
        <h2>
          Stay 
          <br></br>
          In 
          <br></br>
          Touch!
        </h2>
        <div id="info">
          <input type="email" placeholder=" email" id="email"></input>
          <input type="text" id="text"></input>
          <button>Submit</button>
        </div>
      </section>
    )
}

export default Contact;