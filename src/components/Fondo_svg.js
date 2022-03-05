
import PlayerPersonPc from '../components/PlayerPersonPc'
import PlayerPersonPerson from '../components/PlayerPersonPerson'
const Fondo_svg = () => {
    return (
        <div class="container">
        <svg viewBox="0 0 500 500"
            preserveAspectRatio="xMinYMin meet">      
            <path d="M0, 100 C150, 200 350,0 500, 100 L500, 00 L0, 0 Z">
            
          </path>
        </svg>
        <PlayerPersonPerson />
          <PlayerPersonPc />
    </div>
    )
}
export default Fondo_svg;