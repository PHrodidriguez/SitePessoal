import {FaGithub, FaMailBulk} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import './Comtres.css'
function ComTres () {

    

    return(
        <footer>
            <div className="footer">
                <a><h5><FaLinkedin/>Linkedin</h5></a>
                <a><h5><FaGithub/> Github</h5></a>
                <a><h5><FaMailBulk/>pedrorodriguezmp19@gmail.com</h5></a>
            </div>
        </footer>
    )

}
export default ComTres;