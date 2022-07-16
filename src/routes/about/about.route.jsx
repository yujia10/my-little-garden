import './about.style.scss'

function About() {
  return (
    <main>
        <div className="page-title">
          <h1>About</h1>
          <div className="underline"></div>
        </div>
        <div className='about-container'>
          <p>Succulent comes from the Latin word "sucus," which means juice. It's also a nod to the nourishing leaves that help these plants survive in extremely warm conditions</p>
          <img src='./images/succulents.png' alt="succulents" />
          <p>Succulents first cropped up in areas with long dry seasons (such as Africa), since they store water in their leaves.</p>
          <img src='./images/juicy leaf.png' alt="leaf" />
          <p>You can use succulent cuttings to grow new plants. It's called "propagating." To do this, snip off a succulent leaf, let it dry in the sun, and plant it in dirt and water.</p>
          <img src='./images/leaf cuttings.png' alt="cuttings" />
          <p>Here on this app you can checkout my collection of succulents, learn more caring tips and shop for cuttings and leaves!</p>
          <p>If you are also a big fan of succulents, please do not hesitate to contact me！</p>
        </div>
      </main>
  )
}

export default About
