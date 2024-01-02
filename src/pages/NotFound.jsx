// function NotFound () {
//     return(
//         <h1 style={{color:"red"}}>Not Found!</h1>
//     )
// }
// export default NotFound;
import './aboutme.css'
const ITProfile = () => {
    const skills = [
      'Frontend разработка',
      'React.js',
      'JavaScript',
      'HTML',
      'CSS',
     
    ];
  
    return (
      
      <div className="profile-container">
        <div className="profile-info">
          <div className="profile-picture">
            <img className='img' src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/379306241_1391210728124635_7321878945840905719_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=bNNX3tRk_ccAX97YB0D&_nc_ht=scontent-waw1-1.xx&oh=00_AfBsZrP4eXRYl8CNlTZ_mn_w4GSLwz1L621aOrm-UQE59w&oe=6596B3C8" alt="Фотография" />
          </div>
          <div className="profile-description">
            <h2 className='name'>Dmyro Varakuta</h2>
            <p className='p'> Краткое описание работы в IT, опыт, цели и интересы.</p>
            <div className="skills">
              <h3>Навыки:</h3>
              <ul className='ulSkill'>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="social-links">
              <h3>Ссылки:</h3>
              <ul>
                <li>
                  <a className='link' href="https://www.instagram.com/varakyta?igsh=ODA1NTc5OTg5Nw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className='link' href="https://www.facebook.com/people/Dmytro-Varakuta/pfbid0hY91YShEmaWGjsAuS1DwcRZVrDKEKvixmwk9iqzWHVTBXaGQ31VpAUMH3kGrCuZKl/" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a  className='link' href="https://github.com/6e3o6pa3ue" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default ITProfile;
