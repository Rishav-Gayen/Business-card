const Card = () => {
  return (
    <div className="card flex-col items-center">
      <section className="card-img">
        <img src="../../../profile-img.jfif" alt=""/>
      </section>

      <section className="card-heading flex-col items-center">
        <h1 className="heading-name">Rishav Gayen</h1>
        <h2 className="heading-designation">Front-End Developer</h2>
        <a href="https://rishav-gayen.github.io/Scrimba-learning-journal/" className="heading-website">www.rishavgayen.dev</a>
        <a href="mailto:gayenrishav19@gmail.com" className="heading-email"><i className="fa-solid fa-envelope"></i>   Email</a>
      </section>

      <section className="card-body flex-col">
        <div className="about">
            <h2 className="about-heading">About</h2>
            <p className="about-content">
                Frontend Developer, who is extremely enthusiastic in AI and machine learning.
                I love to network with other frontend developers, talk to them and learn more about building User Interfaces.
            </p>
        </div>

        <div className="interests">
            <h2 className="interests-heading">
                Interests
            </h2>
            <p className="interests-content">
                I love programming, designing, Martial Arts and weightlifting. I also love to watch a good movie sometimes.
            </p>
        </div>
      </section>

      <section className="footer">
        <div className="icons flex items-center">

            <span className="icon">
                <i className="fa-brands fa-twitter"></i>
            </span>

            <span className="icon">
                <i className="fa-brands fa-facebook-f"></i>
            </span>

            <span className="icon">
                <i className="fa-brands fa-instagram"></i>
            </span>

            <span className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
            </span>

            <span className="icon">
                <i className="fa-brands fa-github"></i>
            </span>

        </div>
      </section>
      
    </div>
  )
}

export default Card
